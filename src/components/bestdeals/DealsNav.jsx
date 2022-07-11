import React from 'react'
import {NavLink } from 'react-router-dom'

const DealsNav = () => {
  return (
    <>
    <div className="deals_nav mt-100">
        <div className="container">
            <ul>
                <li>
                    <NavLink activeClassName='active' to="/bestdeals">Best Deals</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName='active' to="/tvandvideo">TV & Video</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName='active' to="/cameras">Cameras</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName='active' to="/audio">Audio</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName='active' to="/smartphones">Smartphones</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName='active' to="/gps">GPS & Navi</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName='active' activeClassName='active' to="/computer">Computers</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName='active' to="/portableaudio">Portable Audio</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName='active' to="/accessories">Accessories</NavLink>
                </li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default DealsNav