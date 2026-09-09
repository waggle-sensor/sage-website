import {useEffect, useState} from 'react'

import { Link, useLocation, useHistory } from 'react-router-dom'

import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { ArrowCircleRightOutlined, Close } from '@mui/icons-material'

import { Box, CircularProgress, DialogActions } from '@mui/material'


// webpack's require.context needs a literal path, so each usable image folder is
// registered here rather than passed in as a string. Add a line to add a gallery.
// Filenames carry their own caption and order: "<n>. <caption>.<ext>".
const COLLECTIONS = {
  gallery: {
    ctx: require.context('/static/img/gallery', false, /\.(png|jpe?g|gif|svg|jpg)$/i),
    load: (file: string) => require(`@site/static/img/gallery/${file}`).default,
  },
  'summer-camp': {
    ctx: require.context('/news/img/summer-camp', false, /\.(png|jpe?g|gif|svg|jpg)$/i),
    load: (file: string) => require(`@site/news/img/summer-camp/${file}`).default,
  },
}

export type Collection = keyof typeof COLLECTIONS

const importAllImages = (collection: Collection, limit?: number) => {
  const names = COLLECTIONS[collection].ctx.keys()
    .map((image) => image.replace('./', ''))
    .sort((a, b) => parseInt(a.split('.')[0]) - parseInt(b.split('.')[0]))

  return limit ? names.slice(0, limit) : names
}



// Column counts are written out in full rather than interpolated because
// Tailwind scans source text for class names: a template literal like
// `md:columns-${n}` produces no CSS at all.
const COLUMN_CLASSES = {
  3: 'columns-1 sm:columns-2 md:columns-3 gap-4',
  4: 'columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4',
}

type Props = {
  viewMore?: string // url
  limit?: number
  /** which registered image folder to show; defaults to the sitewide gallery */
  collection?: Collection
  /** widest column count. Use 3 inside a blog post, where the content column is
   *  narrower than a full page and four columns leave the images tiny. */
  columns?: keyof typeof COLUMN_CLASSES
}

const Gallery = (props: Props) => {
  const {viewMore, limit, collection = 'gallery', columns = 4} = props

  const imageList = importAllImages(collection, limit)
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

  useEffect(() => {
    if (!imgName) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' && imgNum > 0) {
        history.replace(`?img=${images[imgNum - 1]}`)
      } else if (event.key === 'ArrowRight' && imgNum < images.length - 1) {
        history.replace(`?img=${images[imgNum + 1]}`)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [imgName, imgNum, images, history])

  return (
    <div>
      <div className={COLUMN_CLASSES[columns]}>
        {imageList.map((fileName, i) => (
          <div key={i} className="mb-4">
            <Link
              to={`?img=${fileName}`}
              onClick={() => { handleImageClick(fileName, i) }}
              replace
            >
              <img
                id={fileName}
                src={COLLECTIONS[collection].load(fileName)}
                alt={`Image ${i + 1}`}
                className="w-full rounded-lg shadow-md"
              />
            </Link>
          </div>
        ))}
        {viewMore &&
          <Link to={viewMore} className="text-[#ddd5ff] hover:text-white font-semibold">
            <Box className="flex w-full rounded-lg shadow-md bg-[#4c3e84] h-48 justify-center items-center">
              <span className="flex items-center gap-2 p-4">
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
        maxWidth="xl"
        fullWidth
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
              {image &&
                <img
                  src={image}
                  className="mx-auto block max-h-[75vh] w-auto max-w-full object-contain"
                />
              }
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