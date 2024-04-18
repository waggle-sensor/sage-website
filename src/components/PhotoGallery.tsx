
/**
 * A basic gapi image photo gallery listing which could potentially
 * be used in MDX files as <PhotoGallery driveFolderID={...} />
 */

import { useEffect, useState } from 'react'


type Props = {
  driveFolderID: string
}

export default function PhotoGallery(props: Props) {
  const {driveFolderID} = props;

  const [imgIDs, setImgIDs] = useState<string[]>()

  useEffect(() => {
    function listFilesInFolder(folderId) {
      gapi.load('client', init)

      async function init() {
        await gapi.client.init({
          apiKey: 'AIzaSyD0xq74f1zILUzUGWqKrEgMca-HGwCDPgA',
          discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
        })

        const request = await gapi.client.drive.files.list({
          'q': `'${folderId}' in parents`,
          'fields': 'nextPageToken, files(id, name)'
        })

        const ids = request.result.files.map(o => o.id)
        setImgIDs(ids)
      }
    }

    listFilesInFolder(driveFolderID)
  }, [driveFolderID])


  return (
    <div className="flex flex-wrap gap-2">
      {imgIDs?.map((id) =>
        <img key={id} src={`https://drive.google.com/uc?export=view&id=${id}`} />)
      }
    </div>
  )
}
