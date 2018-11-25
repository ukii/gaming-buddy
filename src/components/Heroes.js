import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchHeroes} from '../actions/heroActions';
import {fetchMatches} from "../actions/matchesAction";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import GamingBuddyCard from "../Card/GamingBuddyCard";

class Heroes extends Component {
    componentWillMount() {
        this.props.fetchHeroes();
        this.props.fetchMatches();
    }

    calculateHeroHealth(baseStr){
        return parseInt(baseStr) * 18 + 200;
    }

    calculateHeroMana(baseInt) {
        return parseInt(baseInt) * 12 + 75;
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
    fetchMatches: PropTypes.func.isRequired,
    heroes: PropTypes.array,

};

const mapStateToProps = state => ({
    heroes: state.heroes,
    matches: state.matches,
});

export default connect(mapStateToProps, {fetchHeroes, fetchMatches})(Heroes);
