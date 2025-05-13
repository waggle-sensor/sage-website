import {useEffect, useState} from 'react'

import { Link, useLocation, useHistory } from 'react-router-dom'

import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { ArrowCircleRightOutlined, Close } from '@mui/icons-material'

import { Box, CircularProgress, DialogActions } from '@mui/material'


const importAllImages = (limit?: number) => {
  const images = require.context('/static/img/gallery', false, /\.(png|jpe?g|gif|svg|jpg)$/i)
  const names = images.keys()
    .map((image) => image.replace('./', ''))
    .sort((a, b) => parseInt(a.split('.')[0]) - parseInt(b.split('.')[0]))

  return limit ? names.slice(0, limit) : names
}



type Props = {
  viewMore?: string // url
  limit?: number
}

const Gallery = (props: Props) => {
  const {viewMore, limit} = props

  const imageList = importAllImages(limit)
  const history = useHistory()

  const [images] = useState(imageList)
  const [imgNum, setImgNum] = useState(0)
  const [image, setImage] = useState(null)

  const params = new URLSearchParams(useLocation().search)
  const imgName = params.get('img') || null


  useEffect(() => {
    setImgNum(images.findIndex(name => name == imgName))
    setImage(document.getElementById(imgName)?.src)
  }, [imgName, images])

  const handleClose = () => {
    history.replace(location.pathname)
  }

  const handleImageClick = (fileName, i) => {
    setImgNum(i)
    setImage(document.getElementById(fileName)?.src)
  }

  return (
    <div>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {imageList.map((fileName, i) => (
          <div key={i} className="mb-4">
            <Link
              to={`?img=${fileName}`}
              onClick={() => { handleImageClick(fileName, i) }}
              replace
            >
              <img
                id={fileName}
                src={require(`@site/static/img/gallery/${fileName}`).default}
                alt={`Image ${i + 1}`}
                className="w-full rounded-lg shadow-md"
              />
            </Link>
          </div>
        ))}
        {viewMore &&
          <Link to={viewMore} className="text-[#ddd5ff] hover:text-white font-semibold">
            <Box className="flex w-full rounded-lg shadow-md bg-[#4c3e84] h-48 justify-center items-center">
              <span className="flex items-center gap-2">
                See more photos <ArrowCircleRightOutlined />
              </span>
            </Box>
          </Link>
        }
      </div>

      <Dialog
        open={!!imgName}
        onClose={handleClose}
        aria-labelledby="photo-description"
      >
        <DialogTitle className="mr-12">
          Photo Gallery
        </DialogTitle>

        <div className="absolute right-4 top-3">
          <IconButton
            aria-label="close"
            onClick={handleClose}
          >
            <Close />
          </IconButton>
        </div>

        {imgName ?
          <>
            <DialogContent>
              {image && <img src={image} />}
              <div id="photo-description" className="font-medium text-slate-500 text-center">
                {imgName.split('.')[1]}
              </div>
            </DialogContent>
            <DialogActions>
              <Button
                disabled={imgNum <= 0}
                component={Link}
                to={`?img=${images[imgNum - 1]}`}
                replace autoFocus disableRipple
              >
                Prev
              </Button>
              <Button
                disabled={imgNum >= images.length - 1}
                component={Link}
                to={`?img=${images[imgNum + 1]}`}
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
    </div>
  )
}

export default Gallery