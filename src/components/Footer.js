import React from 'react'

import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'

const links = [
  { url: 'https://Shivaniyadav.substack.com//subscribe', label: 'Newsletter' },
  { url: 'https://shivani.gtsb.io/rss.xml', label: 'RSS' },
]
const madeWithLinks = [
  { url: 'https://twitter.com/ShivaniYadava', icon: twitter },
  { url: 'https://www.facebook.com/ritu.yadav.7', icon: facebook },
  { url: 'https://www.instagram.com/ritz1204/', icon: instagram },
  { url: 'https://www.linkedin.com/in/shivaniyadav/', icon: linkedin },
]

export const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <nav>
          <span className="desktop-only">❤️ Shivani Yadav</span>
          {links.map((link) => (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              key={link.url}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <nav>
          {madeWithLinks.map((link) => (
            <a
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
              key={link.url}
            >
              <span>{link.label}</span>
              <img src={link.icon} alt={link.label} />
            </a>
          ))}
        </nav>
      </section>
    </footer>
  )
}
