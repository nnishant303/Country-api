import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function () {
    const error = useRouteError()
    console.log(error);
  return (
    <>
    <h1>{error.status}</h1>
    <h1>{error.statusText}</h1>
    <h2>Bhai Kuchh Gadbad hai!!</h2>
    <h2>kuchh locha hai , sahi kar le!</h2>
    </>
    
  )
}
