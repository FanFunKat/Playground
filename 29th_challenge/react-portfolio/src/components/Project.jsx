import React from 'react'
import PropTypes from 'prop-types'
import Link from './Link'

const Project = ({ data, reverse }) => {
  return (
    <article className='project' style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}>
      <div className='image'>
        <img src={data.image} alt={data.title} />
      </div>
      <div className='content'>
        <h3>{data.title}</h3>
        <ul>
          {data.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <p>{data.description}</p>
        <div>
          <Link href={data.liveLink}>Live Site</Link>
          <Link href={data.githubLink}>Github</Link>
        </div>
      </div>
    </article>
  )
}

export default Project

Project.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    liveLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
  }),
  reverse: PropTypes.bool.isRequired,
}