import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {fetchHeroes} from "../actions/heroActions";
import UserWords from "./UserWords";
import {OPEN_DOTA_API} from "../actions/types";
import Grid from "@material-ui/core/es/Grid/Grid";


class User extends Component {

    constructor(){
        super();
        this.state = {
            words: {},
            player: {},
            matches: [],
        };
    }

    componentDidMount() {
        this.props.fetchHeroes();
        this.setState({player: this.props.location.state.linkState.player});
        console.log(this.state);
        this.fetchWords(this.props.location.state.linkState.player.account_id);
        this.fetchMatches(this.props.location.state.linkState.player.account_id);
    }


    classes = theme => ({
        root: {
            width: '100%',
            marginTop: theme.spacing.unit * 3,
            overflowX: 'auto',
        },
        table: {
            minWidth: 700,
        },
    });

    calculatePlayerMatchOutcome(isRadiantNumber, didRadiantWin) {

        if (parseInt(isRadiantNumber) <= 127 && didRadiantWin) {
            return "Match Won";
        }
        else if (parseInt(isRadiantNumber) > 127 && !didRadiantWin) {
            return "Match Won";
        }
        return "Match Lost";
    }

    getColumnColor(isWin) {
        return isWin === 'Match Won' ? 'green' : 'red';
    }

    findHeroImageById(id){

        const { heroes } = this.props.heroes;
        let hero = heroes.find(hero => hero.id === id);

        if (hero != null) {
            return 'https://api.opendota.com' + hero.icon;
        }
        return null
    }

    findHeroNameById(id){

        const { heroes } = this.props.heroes;
        const hero = heroes.find(hero => hero.id === id);

        if (hero != null) {
            return hero.localized_name;
        }
        return null
    }

    fetchWords(userId) {
        console.log(userId);
        fetch(OPEN_DOTA_API + '/players/'+ userId +'/wordcloud')
            .then(res => res.json())
            .then(words => {
                    this.setState({words: words.all_word_counts})
                })
    };
    fetchMatches(userId){
        console.log(userId);
        fetch(OPEN_DOTA_API + '/players/'+ userId + '/recentMatches')
            .then(res => res.json())
            .then(matches => {
                console.log(matches);
                this.setState({matches: matches});
            })
    };

    render() {
        return (
            <Grid container style={{width: '100%'}}>
                <Grid item xs={6}>
                    <Paper className={this.classes.root}>
                        <Table className={this.classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell >Hero</TableCell>
                                    <TableCell>Hero Name</TableCell>
                                    <TableCell>Match Outcome</TableCell>
                                    <TableCell>K/D/A</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.matches.slice(0,10).map(match => {
                                    return (
                                        <TableRow key={match.match_id}>
                                            <TableCell component="th" scope="row">
                                                <img src={this.findHeroImageById(match.hero_id)}/>
                                                <span>{this.findHeroNameById(match.hero_id)}</span>
                                            </TableCell>
                                            <TableCell>
                                                {this.findHeroNameById(match.hero_id)}
                                            </TableCell>
                                            <TableCell style={{width: '15%', fontWeight: 'bold', color: this.getColumnColor(this.calculatePlayerMatchOutcome(match.player_slot, match.radiant_win))}}>
                                                {this.calculatePlayerMatchOutcome(match.player_slot, match.radiant_win)}
                                            </TableCell>
                                            <TableCell style={{fontWeight: ' bold'}}>
                                                {match.kills} / {match.deaths} / {match.assists}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                <UserWords words={this.state.words} />
                </Grid>
                <Grid item xs={4}>

                </Grid>
            </Grid>
        );
    }
}

User.propTypes = {
    fetchHeroes: PropTypes.func.isRequired,
    matches: PropTypes.array,
    heroes: PropTypes.array,
    words: PropTypes.object,
};

const mapStateToProps = state => ({
    heroes: state.heroes,
    words: state.words,
});

export default connect(mapStateToProps, {fetchHeroes})(User);
