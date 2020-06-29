import React from 'react'
import { useApi } from '../Api'

const Index = () => {

   const [data] = useApi(`https://jsonplaceholder.typicode.com/users`)

   return (
      <ul>
         {
            data.map((user, key) => (
               <li key={key}>{user.name}</li>
            ))
         }
      </ul>
   )
}

export default Index