import React, { Component } from 'react'
import { connect } from 'react-redux'
import Favorites from './Favorites'

class Profile extends Component {
    render() {
        debugger
        return (
            <div>
                <h1>Welcome {this.props.currentUser.user.first_name}!</h1>
                {this.props.currentUser.favorites.length > 0 ?
                this.props.currentUser.favorites.map(recipe => <Favorites recipe={recipe} key={recipe.id} />)
                : <p> Search for recipes and favorite them to see them here </p>}
            </div>
        )
    }
}

//this.props.currentUser.first_name

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}


export default connect(mapStateToProps)(Profile)
