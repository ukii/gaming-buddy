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

class Heroes extends Component {
    componentWillMount() {
        this.props.fetchHeroes();
        this.props.fetchMatches();
    }

    // convertFrom64To32SteamId(){
    //     var number = parseInt("76561198844623045".substring(3)) - 61197960265728;
    // }

    calculateHeroHealth(baseStr, strPerLvl){
        return parseInt(baseStr) * 18 + 200;
    }

    calculateHeroMana(baseInt, intPerLvl){
        return parseInt(baseInt)* 12 + 75;
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.heroes.heroes.map(hero => {
                        return ( <Card style={{width: '17%', display: 'inline-block', margin: '10px'}} key={hero.id}>
                            <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                                       image={`https://api.opendota.com${hero.img}`} title="title"/>
                            <CardContent>
                                <Typography gutterBottom variant="headline" component="h2">
                                    <img style={{width: '15%'}}
                                         src='https://cdn.iconscout.com/icon/premium/png-256-thumb/medical-heart-heartcare-care-healthcare-treatment-health-27479.png'/> : {this.calculateHeroHealth(hero.base_str, hero.str_gain)}
                                    <img style={{width: '15%'}}
                                         src='https://cdn2.iconfinder.com/data/icons/game-1-2/512/mana_potion_1-512.png'/> : {this.calculateHeroMana(hero.base_int, hero.int_gain)}
                                </Typography>
                                 <Typography gutterBottom variant="headline" component="h2">
                                    {hero.localized_name}
                                </Typography>
                                <Typography component="int">
                                    <img
                                        src='http://cdn.dota2.com/apps/dota2/images/heropedia/overviewicon_int.png'/> : {hero.base_int} + {hero.int_gain} per
                                    level
                                </Typography>
                                <Typography component="str">
                                    <img
                                        src='http://cdn.dota2.com/apps/dota2/images/heropedia/overviewicon_str.png'/> : {hero.base_str} + {hero.str_gain} per
                                    level
                                </Typography>
                                <Typography component="str">
                                    <img
                                        src='http://cdn.dota2.com/apps/dota2/images/heropedia/overviewicon_agi.png'/> : {hero.base_agi} + {hero.agi_gain} per
                                    level
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" href="" target="_blank">
                                    More about {hero.localized_name}
                                </Button>
                            </CardActions>
                        </Card>
                        )})}
                </ul>
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
