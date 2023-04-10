
import React from 'react'
import Skeleton from '@mui/material/Skeleton'

export default function TwitterSkeleton() {

  return (
    <>
      <div className="flex justify-between m-4">
        <Skeleton variant="text" width={200} sx={{ fontSize: '1.5rem' }} />
        <Skeleton width={75}/>
      </div>
      <hr className="m-0"/>
      {Array.from(Array(5).keys()).map((i) =>
        <div className="flex flex-col" key={i}>
          <div className="flex gap-2 m-4">
            <div>
              <Skeleton variant="circular" width={50} height={50} />
            </div>
            <div className="w-full">
              <div className="flex justify-start gap-4">
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="100%" />
              </div>
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="rounded" height={200} />
            </div>
          </div>
          <hr className="m-0 bg-gray-200"/>
        </div>
      )}
    </>
  )
}

