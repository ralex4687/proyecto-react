import React, {useEffect, useState} from 'react'
import { useFetch } from '../hooks/useFetch' 

const ComponentFetch = () => {
  const { data, loading, error } = useFetch('https://api.example.com/data')

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  console.log(data, loading, error)
 
  return (
    <div>
     <h1>componentFetch</h1>
    </div>
    

  )
}


export default ComponentFetch