import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchHeroes } from '../actions/heroActions';
import {fetchMatches} from "../actions/matchesAction";

class Heroes extends Component {
  componentWillMount() {
    this.props.fetchHeroes();
    this.props.fetchMatches();
  }



  render() {
    /*const postItems = this.props.heroes.map(hero => (
      <div key={hero.id}>
        <h3>{hero.localized_name}</h3>
        <p>{hero.attack_type}</p>
      </div>
    ));*/
    console.log(this.props.heroes.heroes);
    console.log(this.props.matches);
    return (
      <div>
        <h1>Heroes</h1>

      </div>
    );
  }
}

Heroes.propTypes = {
  fetchHeroes: PropTypes.func.isRequired,
  fetchMatches: PropTypes.func.isRequired,
  heroes: PropTypes.array,
  matches: PropTypes.array,
};

const mapStateToProps = state => ({
  heroes: state.heroes,
  matches: state.matches,
});

export default connect(mapStateToProps, { fetchHeroes, fetchMatches })(Heroes);
