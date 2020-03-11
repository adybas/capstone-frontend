import React, { Component } from 'react'
import { connect } from 'react-redux'
import home from '../home.png'

export class Home extends Component {
    render() {
        return (
            <div>
                "I'm Home"

                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)( Home
)
