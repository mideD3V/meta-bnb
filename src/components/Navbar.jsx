import React from 'react'

const Navbar = () => {
  return (
      <div>
          <logo>
              LOGO
          </logo>

          <ul>
              <li>Home</li>
              <li>Place to stay</li>
              <li>NFTs</li>
              <li>Community</li>
          </ul>

          <div className="wallet_btn">
              <a href="#">Coonect wallet</a>
          </div>
    </div>
  )
}

export default Navbar