import React from "react";
import { connect } from "react-redux";
import { changeSearchText } from "../redux/actions";

const Searchbar = props => (
  <div className="search-bar">
    <div className="text-center">
      <input
        type="text"
        placeholder="Search"
        value={props.value}
        onChange={e => props.onChange(e.target.value)}
      />
    </div>
    <div className="" />
  </div>
);

const mapStateToProps = state => {
  return {
    value: state.searchText
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: (searchText) => {dispatch(changeSearchText(searchText))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar)