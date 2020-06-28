import React, { useState } from 'react'
import clsx from 'clsx'
import './style.scss'

const Index = () => {

   const [state, setState] = useState({
      description: 'Open',
      disbled: false
   })

   const { description, disabled } = state

   const handleOnClick = () => {
      setState({
         description: disabled == true ? 'Close' : 'Open',
         disabled: !disabled
      })
   }


   return (
      <div>
         <button
            onClick={handleOnClick}
         >
            {description}
         </button>
         <div className={clsx(['pseudo-element'], { disabled })} />
      </div>
   )
}

export default Index