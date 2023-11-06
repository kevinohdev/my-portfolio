import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react'
import ProjectsStyles from '../styles/ProjectStyles';


const Projects = () => {
  const data = useStaticQuery(graphql`
  query {
    allSanityWorks(sort: { fields: [order], order: ASC })  {
    nodes {
      name
      id
      projectLink
      codeLink
      tech
      description
      order
      imgUrl {
        asset {
          gatsbyImageData(layout: CONSTRAINED, width: 700)
        }
      }
    }
  }
}
`);


const work = data.allSanityWorks.nodes;

  return (
    <ProjectsStyles id="projects">
      <div className='container'>
        <h1>Projects</h1>
        <hr></hr>
        {work.map((work, i) => (
          <div className='card-list' key={`${work.id}-${i}`}>
            <div className='card'>
              <GatsbyImage className='image' image={work.imgUrl?.asset?.gatsbyImageData} alt='picture of work'></GatsbyImage>
              <h2>{work.name}</h2>
              <div className='tech'> 
                {work.tech.map((tech, i) => (
                  <div key={`${tech.id}-${i}`} className=''>&bull;{tech}</div>
                ))}
              </div>       
              <div className='links'>
                <a href={work.projectLink} className='padding-border'>Live Site</a>
                <a href={work.codeLink} className='padding-border'>GitHub</a>
              </div>
            </div> 
        </div>   
    ))}
      </div>
    </ProjectsStyles>
  )
}

export default Projects