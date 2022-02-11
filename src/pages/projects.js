import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import config from '../utils/config'
import vastra from '../../content/thumbnails/tn.png'
import Mpfl from '../../content/images/mpfl.png'
import Nmre from '../../content/images/nmre.png'

const projectsList = [
  {
    name: 'Vastra Lifestyle Exhibition, Navi Mumbai',
    tagline: 'An ultimate fashion expo brings the drooling range of fashion and ethnic trends.',
    image: vastra,
    url: 'https://www.hook2events.com/p/vastra-an-ultimate-fashion-expo1524134211',
    description: `Description : The one stop expo for all fashion Trend. 
    It was the event of range of fashionable and trendy ethnic Indian dresses . 
    the exhibition was attended by more then 2000+ patrons and spreads over 40 stalls with each stall having a jaw dropping styles. 
    It gave the opportunity to show a local brand on a huge platform .`,
  },
  {
    name: 'MPFL (Mumbai Premier Footsy League), Navi Mumbai',
    image: Mpfl,
    tagline: 'Expertise teams from Football Industry participated from all over Mumbai, Navi Mumbai and Thane to compete with each other to win MPFL Trophy.',
    url: 'https://www.onspon.com/event/games-and-sports/mumbai-premier-footsy-league/-nerul',
    description: `Description : Mumbai Premier Footsy league- It was all about football in Navi Mumbai with a professional approach to build team spirit between Individual 
    to create healthy relationship with entertainment, Excitement and a great exposure with Recognition. 
    MPFL invited the true fans of Football from Navi Mumbai, For Playing the most exciting form of the game- The Football. Sponsor friendly, the best rated event in its category.`,
  },
  {
    name: 'NMRE (Navi Mumbai Real Estate Expo), Navi Mumbai',
    tagline: 'A grande Property Expo in Navi Mumbai',
    image: Nmre,
    url: 'https://10times.com/nmre',
    description: `Description : It was a strong industry platform which brings together prominent 
    Real- Estate developers of Mumbai & Navi Mumbai to work towards the development & Housing 
    needs of Mumbai & Navi Mumbai.`,
  },
  
]

export default function ProjectsIndex() {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    async function getStars() {
      const repos = await fetch(
        'https://api.github.com/users/taniarascia/repos?per_page=100'
      )

      return repos.json()
    }

    getStars()
      .then((data) => {
        setRepos(data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <Helmet title={`Projects | ${config.siteTitle}`} />
      <SEO />

      <article>
        <header>
          <div className="container">
            <h1>Projects</h1>
            <p className="description">
              A few highlights of my projects. View them all below.
            </p>
          </div>
        </header>

        <section className="projects large container">
          {projectsList.map((project) => (
            <div className="project" key={project.name}>
              <h2>{project.name}</h2>
              {project.image && <img src={project.image} alt={project.name} />}
              <div className="links tags">
                {project.writeup && <Link to={project.writeup}>Write-up</Link>}
                <a>
                  POST : EVENT PLANNER AND COORDINATOR
                </a>
                {project.url && (
                  <a href={project.url} target="_blank" rel="noreferrer">
                    SOURCE
                  </a>
                )}
              </div>
              <p className="description">{project.tagline}</p>
              <p className="description">{project.description}</p>
              
            </div>
          ))}
        </section>
      </article>
    </>
  )
}

ProjectsIndex.Layout = Layout
