import React from 'react'
import Particles from 'react-tsparticles'
import particleConfig from './config/particles-config'

const ParticlesBackground = () => {
  return (
   <Particles params={particleConfig}></Particles>
  )
}

export default ParticlesBackground