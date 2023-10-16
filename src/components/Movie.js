import React, { Component } from "react";
import PropTypes from "prop-types";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { title, poster_path } = this.props;
    const { isHovered } = this.state;

    return (
      <div className="movie" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <figure>
          <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`} alt={title} />
          <figcaption>
            {isHovered && <h2 className="movie__title">{title}</h2>}
          </figcaption>
        </figure>
      </div>
    );
  }
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
};

export default Movie;
