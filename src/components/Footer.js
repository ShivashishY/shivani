import React from 'react'

import netlify from '../../content/thumbnails/netlify.png'
import gatsby from '../assets/gatsby.png'
import github from '../assets/nav-github.png'

const links = [
  { url: 'https://Shivaniyadav.substack.com//subscribe', label: 'Newsletter' },
  { url: 'https://shivani.gtsb.io/rss.xml', label: 'RSS' },
]
const madeWithLinks = [
  { url: 'https://twitter.com/ShivaniYadava', label: 'Twitter', icon: gatsby },
  { url: 'https://www.facebook.com/ritu.yadav.7', label: 'Facebook', icon: github },
  { url: 'https://www.instagram.com/ritz1204/', label: 'Instagram', icon: netlify },
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
