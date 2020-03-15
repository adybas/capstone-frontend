import React from 'react';
import { Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import { connect } from 'react-redux'
import { fetchingIngredients } from './redux/actions'


class App extends React.Component {
  componentDidMount(){
    this.props.fetchingIngredients()
  }

  render(){
    return (
      <div className="App">
        < Navbar />
        < Route path="/" component={Home} />
        < Footer />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingIngredients: () => { dispatch( fetchingIngredients() )}
  }
}

export default connect(null, mapDispatchToProps)(App)