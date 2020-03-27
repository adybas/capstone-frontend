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
            <div className="profile"> 
                <h1 className="profile-header">Welcome {this.props.currentUser.user.first_name}!</h1>
                <div className="left-column">
                    <div className="row row-cols-1 text-block"> 
                    <h1 className="text-center"> My Favorites </h1>
                    {this.props.currentUser.favorites.length > 0 ?
                        this.props.currentUser.favorites.map(recipe => <Favorites recipe={recipe} key={recipe.id} />)
                    : <p> Search for recipes and favorite them to see them here </p>  
                    } 
                    </div>
                </div> 
                <div className="right-column">
                    {/* <h3>Recipe Notes</h3> */}
                    
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
