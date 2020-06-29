import React, { useState, useEffect } from 'react'

export const useApi = (url) => {
   const [data, setData] = useState([])
   const [isFetching, setFetching] = useState(false)

   useEffect(() => {
      try {
         setFetching(true)
         fetch(url)
            .then(res => res.json())
            .then(data => {
               setData(data)
            })
      } catch (err) {
         console.log(err)
      } finally {
         setFetching(false)
      }
   }, [url])

   return [data, isFetching]
}