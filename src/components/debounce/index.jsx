import React, { useState, useRef, useEffect } from 'react'
import { useDebounce } from 'use-debounce'
import { Divider } from '@material-ui/core'

const Index = () => {

   const rFind = useRef()
   const [value, setValue] = useState()
   const [list, setList] = useState([])

   useEffect(() => {

      fetch(`https://universidad-react-api-test.luxfenix.now.sh/products?name=${value}`)
         .then(res => res.json())
         .then(data => { setList(data) })

      return () => {/*-> UNMOUNT COMPONENT */
         console.log('¡El componente desmontado!')
      }
   }, [value])

   const handleChange = () => {
      setValue(rFind.current.value)
   }


   return (
      <>
         <input
            type='text'
            placeholder='Buscar...'
            ref={rFind}
            onChange={() => handleChange()}

         />
         <Divider />
         <ul>
            {
               list.map(value => (
                  <li key={value.id}>{value.name}</li>
               ))
            }
         </ul>
      </>
   )
}

export default Index;