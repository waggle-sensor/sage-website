import { useEffect, useState } from 'react'
import Alert from '@mui/material/Alert'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

type Notice = {
  message?: string
  severity?: 'info' | 'warning' | 'error' | 'success'
}

export default function CustomBanner() {
  const {siteConfig} = useDocusaurusContext()
  const staticNotice: Notice = siteConfig.themeConfig.notice
  const noticeURL = siteConfig.themeConfig.noticeURL

  const [notice, setNotice] = useState<Notice>(null)


  useEffect(() => {
    if (staticNotice?.message) {
      // Use notice from config if available
      setNotice(staticNotice)
    } else if (noticeURL) {
      // Fetch notice from external URL if provided
      fetch(noticeURL as string)
        .then(res => res.json())
        .then(data => {
          console.log('Fetched notice:', data)
          if (data.message) {
            setNotice(data)
          }
        })
        .catch(err => console.error('Error fetching notice:', err))
    }
  }, [staticNotice, noticeURL])


  return (
    <>
      {notice &&
        <Alert severity={notice?.severity || 'info'} onClose={() => setNotice(null)} className='alert'>
          <b>{notice?.message}</b>
        </Alert>
      }
    </>
  )
}
