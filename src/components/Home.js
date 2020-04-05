import React from 'react'
import fetchingRandomRecipe from '../redux/actions'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
// Home page => should show Two boxes, one to generate random recipe (get insprired!),
// second box should show options to login, with text == find recipes and favorite them to save to your profile

const Home = props => {
    return (
        <div className="">
            <div>
                {/* check to see if loged in? if not, show login text and random stuff */}
            </div>

            <div>
                {/* Redirect to recipes/:id 
                    Show button or something that will render a random user recipe!
                */}
            </div>
        </div>
    )
} 

const mapDispatchToProps = dispatch => {
    return {
        randomRecipe: () => {dispatch(fetchingRandomRecipe())}
    }
}


export default connect(null, mapDispatchToAction)(Home)

