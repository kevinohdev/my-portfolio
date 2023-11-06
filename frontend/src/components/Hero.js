import React from 'react'
import HeroStyles from '../styles/HeroStyles'
import { graphql, useStaticQuery } from 'gatsby';

const Hero = () => {
  const data = useStaticQuery(graphql`
  query {
  allSanityAbout {
    nodes {
      name
      title
      description
      git
    }
  }
}
  `);

 const about = data.allSanityAbout.nodes;
 console.log(about)

  return (
    <HeroStyles>
      <div className='container' id='home'>
        <h1>{about[0].name}</h1>
        <h2>{about[0].title}</h2>
        <h3><span>&#9829;</span> {about[0].description}</h3>
      </div>
    </HeroStyles>
  )
}

export default Hero