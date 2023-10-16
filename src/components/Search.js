import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  render() {
    return (
      <form className="search" onInput={event => this.props.onInput(event.target.value)}>
        <input type="search" value={this.props.query} placeholder={this.props.placeholder} />
      </form>
    );
  }
}

Search.propTypes = {
  query: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default Search;