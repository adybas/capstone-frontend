import React from 'react'
import {fetchingRandomRecipe} from '../redux/actions'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
// Home page => should show Two boxes, one to generate random recipe (get insprired!),
// second box should show options to login, with text == find recipes and favorite them to save to your profile

const Home = props => {

    const handleClick = () => {
        props.randomRecipe()
    }

    if (props.redirect) {
        debugger
        // return <Redirect to={`/recipes/${id}`} />
    }

    return (
        <div className="">
            <div>
                {/* check to see if loged in? if not, show login text and random stuff */}
            </div>

            <div>
                <button onClick={handleClick}>Find Random Recipes</button>
                {/* Redirect to recipes/:id 
                    Show button or something that will render a random user recipe!
                */}
            </div>
        </div>
    )
} 

const mapStateToProps = state => {
    return {
        redirect: state.redirect
    }
}

const mapDispatchToProps = dispatch => {
    return {
        randomRecipe: () => {dispatch(fetchingRandomRecipe())}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)

