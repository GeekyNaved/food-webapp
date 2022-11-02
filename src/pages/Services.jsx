import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/context'

const Services = () => {
  const { services } = useGlobalContext();
 console.log('services', services)
  return (
    <div>Services</div>
  )
}

export default Services