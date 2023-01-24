import React, { Component } from "react";
import { connect } from "react-redux";
import { actSearch } from "./../redux/reducers/user/action";

class Search extends Component {
  handleOnchange = (event) => {
    this.props.searchUser(event.target.value);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control mb-3 w-50"
        onChange={this.handleOnchange}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchUser: (keyword) => {
      dispatch(actSearch(keyword));
    },
  };
};

export default connect(null, mapDispatchToProps)(Search);
