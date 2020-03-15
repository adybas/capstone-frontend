import React, { Component } from 'react'
import { connect } from 'react-redux'

class Footer extends Component {
    render() {
        return (
            <div>
                I'M A FOOTER
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
