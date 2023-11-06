import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'


import Card from '@mui/material/Card'



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



type LinkCardProps = {
  title: string
  src: string
  link: string
  description?: string
}

export function LinkCard(props: LinkCardProps) {
  const {title, src, link} = props
  return (
    <Card
      className="card z-0 relative"
      component={Link}
      to={link}
    >
      <img src={src} className="max-w-[256px] md:max-w-[220px] md:max-h-[220px]" />
      <h3 className="text-white absolute left-4 bottom-0 z-10">{title}</h3>
    </Card>
  )
}


type Props = {
  driveFolderID: string
}

export default function FileIndex(props: Props) {
  const {driveFolderID} = props

  const params = new URLSearchParams(useLocation().search)
  const collection = params.get('collection')

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
        console.log('files', files)

        setFiles(files)
      }
    }
    listIndex(driveFolderID)
  }, [collection, driveFolderID])


  return (
    <Root className="flex flex-wrap gap-2">
      {!collection && files &&
        Object.keys(files).map(folderName => {
          const filesByName = files[folderName]
          const {id} = Object.values(filesByName)[0]

          return (
            <LinkCard
              key={id}
              title={folderName}
              link={`/photos?collection=${folderName}`}
              src={`https://drive.google.com/uc?export=view&id=${id}`}
            />
          )
        })
      }

      {collection && files &&
        <div className="flex flex-wrap gap-2">
          {Object.values(files[collection]).map(({id}) =>
            <img key={id} src={`https://drive.google.com/uc?export=view&id=${id}`} />)
          }
        </div>
      }
    </Root>
  )
}


const Root = styled.div`
  img {
    max-height: 200px;
  }

  .card::after {
    display: block;
    position: relative;
    background-image: linear-gradient(to bottom, transparent 0%, black 100%);
    margin-top: -110px;
    height: 110px;
    width: 100%;
    content: '';
  }

  .card:hover h3 {
    color: rgb(0, 128, 199);
    text-decoration: underline;
  }
`