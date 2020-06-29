import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import Spinner from './components/StyledComponets/Spinner'
const Api = lazy(() => import('./components/Clsx'))
const Boton = lazy(() => import('./components/StyledComponets/Button'))

ReactDOM.render(
  <Suspense fallback={<Spinner />}>
    <Boton />
    <Boton />
    <Boton />
    <Boton />
    <Boton />
    <Boton />
    <Boton />
    <Api />
  </Suspense>,
  document.getElementById('root')
)
