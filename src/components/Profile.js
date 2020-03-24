import React, { Component } from 'react'
import { connect } from 'react-redux'
import Favorites from './Favorites'
import {resetRedirect} from '../redux/actions'

class Profile extends Component {

    componentDidMount(){
        this.props.redirect()
    }

    render() {
        if (!this.props.currentUser) {
            return "Please sign in!"
          }
        return (
            <div > 
                <h1>Welcome {this.props.currentUser.user.first_name}!</h1>
                <div className="container">
                    <div class="card-deck row row-cols-2">
                    {this.props.currentUser.favorites.length > 0 ?
                        this.props.currentUser.favorites.map(recipe => <Favorites recipe={recipe} key={recipe.id} />)
                    : <p> Search for recipes and favorite them to see them here </p>  
                    } 
                    </div>
                </div>              
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        redirect: () => {dispatch(resetRedirect())}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile)
