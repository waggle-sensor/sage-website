/**
 * A basic photo gallery which pulls from google drive where photos
 * are organized into directories.
 */

import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { Link, useLocation, useHistory } from 'react-router-dom'

import useMediaQuery from '@mui/material/useMediaQuery'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'

import CloseIcon from '@mui/icons-material/Close'

import LinkCard from './ImageLinkCard'
import { CircularProgress } from '@mui/material'



async function listAllFiles(gapi, folderId) {
  const query = `'${folderId}' in parents`
  const fields = 'nextPageToken, files(id, name, mimeType)'
  let files = []
  let nextPageToken = null
  do {
    const response = await gapi.client.drive.files.list({
      q: query,
      fields: fields,
      pageToken: nextPageToken,
      pageSize: 1000,
    })
    files = files.concat(response.result.files);
    nextPageToken = response.result.nextPageToken;
  } while (nextPageToken)

  const filesByDir = {}
  for (const file of files) {
    const {id, name, mimeType} = file

    if (!(name in filesByDir)) {
      filesByDir[name] = []
    }

    if (mimeType === 'application/vnd.google-apps.folder') {
      filesByDir[name] = await listAllFiles(gapi, id)
    } else {
      filesByDir[name] = file
    }
  }
  return filesByDir
}



type Props = {
  driveFolderID: string
}

export default function FileIndex(props: Props) {
  const {driveFolderID} = props

  const history = useHistory()
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const params = new URLSearchParams(useLocation().search)
  const collection = params.get('collection')
  const imgNum = parseInt(params.get('img')) || null // photos are 1-indexed

  const [files, setFiles] = useState<string[]>()


  useEffect(() => {
    function listIndex(folderId) {
      gapi.load('client', init)

      async function init() {
        await gapi.client.init({
          apiKey: 'AIzaSyD0xq74f1zILUzUGWqKrEgMca-HGwCDPgA',
          discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
        })

        const files = await listAllFiles(gapi, folderId)

        setFiles(files)
      }
    }

    listIndex(driveFolderID)

  }, [driveFolderID])


  const getImages = () => {
    return Object.values(files[collection])
  }

  const handleClose = () => {
    history.replace(`/photos?collection=${collection}`)
  }


  return (
    <Root className="flex flex-wrap gap-2 mx-auto">
      {!collection && files &&
        Object.keys(files).map(folderName => {
          const filesByName = files[folderName]
          const {id, name} = Object.values(filesByName)[0]

          return (
            <LinkCard
              key={id}
              title={folderName}
              link={`/photos?collection=${folderName}`}
              src={`https://drive.google.com/thumbnail?id=${id}`}
              alt={name}
            />
          )
        })
      }

      {collection && files &&
        <div className="flex flex-wrap gap-2">
          {getImages().map(({id, name}, i) => {
            return (
              <Link to={`/photos?collection=${collection}&img=${i + 1}`} key={id}>
                <img src={`https://drive.google.com/thumbnail?id=${id}`} alt={name} />
              </Link>
            )
          })}
        </div>
      }


      <Dialog
        fullScreen={fullScreen}
        open={!!imgNum}
        onClose={handleClose}
        aria-labelledby="photo-title"
      >
        <DialogTitle id="photo-title" className="mr-12">
          {collection} | Photo {imgNum}
        </DialogTitle>

        <div className="absolute right-4 top-3">
          <IconButton
            aria-label="close"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </div>

        {collection && files && imgNum ?
          <>
            <DialogContent>
              <img src={`https://drive.google.com/uc?export=view&id=${getImages()[imgNum - 1].id}`} />
            </DialogContent>
            <DialogActions>
              <Button
                disabled={imgNum <= 1}
                component={Link}
                to={`/photos?collection=${collection}&img=${imgNum - 1}`}
                replace autoFocus disableRipple
              >
                Prev
              </Button>
              <Button
                disabled={imgNum > getImages().length - 1 }
                component={Link}
                to={`/photos?collection=${collection}&img=${imgNum + 1}`}
                replace autoFocus disableRipple
              >
                Next
              </Button>
            </DialogActions>
          </> :
          <div className="mx-auto">
            <CircularProgress />
          </div>
        }
      </Dialog>
    </Root>
  )
}


const Root = styled.div`
  img {
    max-height: 200px;
  }
`