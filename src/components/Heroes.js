import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchHeroes} from '../actions/heroActions';
import {fetchMatches} from "../actions/matchesAction";
import GamingBuddyCard from "../Card/GamingBuddyCard";

class Heroes extends Component {
    componentWillMount() {
        this.props.fetchHeroes();
    }

    render() {
        return (
            <div>
                {this.props.heroes.heroes.map(hero => {
                    return (
                        <GamingBuddyCard hero={hero}/>
                    )
                })}
            </div>
        );
    }
}

Heroes.propTypes = {
    fetchHeroes: PropTypes.func.isRequired,
    heroes: PropTypes.array,

};

const mapStateToProps = state => ({
    heroes: state.heroes,
});

export default connect(mapStateToProps, {fetchHeroes})(Heroes);
