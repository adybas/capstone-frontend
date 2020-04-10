import React from 'react'
import { Link } from 'react-router-dom'
import firsthome from '../assets/images/firsthome.jpg'

const MainPage = () => {
    return (
        <div className="landing-page">
            <div className="bg-image"></div>
            <img className="bg-image" src={firsthome} alt="background image of table with food"/>
            <div className="bg-text hover-shadow">
                <h2>Nourish your <br/>creative side</h2>
                <Link to='/login'>
                <h1 className="white-font">Discover Recipes</h1></Link>
            </div>
        </div>
    )
}

export default MainPage