import React, { Component } from 'react'
import { connect } from 'react-redux'
import Favorites from './Favorites'
import {resetRedirect} from '../redux/actions'

class Profile extends Component {

    componentDidMount(){
        this.props.redirect()
    }

    render() {
        // debugger
        return (
            <div >
                <h1>Welcome {this.props.currentUser.user.first_name}!</h1>
                {this.props.currentUser.favorites.length > 0 ?
                this.props.currentUser.favorites.map(recipe => <Favorites recipe={recipe} key={recipe.id} />)
                : <p> Search for recipes and favorite them to see them here </p>}
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
