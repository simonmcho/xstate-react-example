import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{ width: '80%', margin: '0 auto', padding: '12px 0' }}>
      <div>
        Click the links to go to an example
      </div>
      <nav>
        <ul style={{
          display: 'flex',
          justifyContent: 'space-between',
          listStyle: 'none',
          padding: '0'
        }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/switch">Switch Example</Link>
          </li>
          <li>
            <Link to="/data-example">Async Data Loading Example</Link>
          </li>
          <li>
            <Link to="/video">Video Player Example</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Home
