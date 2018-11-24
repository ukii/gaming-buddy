import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchMatches} from "../actions/matchesAction";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {fetchHeroes} from "../actions/heroActions";

class User extends Component {

    componentWillMount() {
        this.props.fetchMatches();
        this.props.fetchHeroes();
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
        console.log(this.props.heroes);
        return "test";
    }

    render() {
        return (
            <Paper className={this.classes.root}>
                <Table className={this.classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Hero</TableCell>
                            <TableCell>Match Outcome</TableCell>
                            <TableCell>Kills</TableCell>
                            <TableCell>Deaths</TableCell>
                            <TableCell>Assists</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.matches.matches.map(match => {
                            return (
                                <TableRow key={match.match_id}>
                                    <TableCell component="th" scope="row">{this.findHeroImageById(match.hero_id)}</TableCell>
                                    <TableCell
                                        style={{fontWeight: 'bold', color: this.getColumnColor(this.calculatePlayerMatchOutcome(match.player_slot, match.radiant_win))}}>
                                        {this.calculatePlayerMatchOutcome(match.player_slot, match.radiant_win)}</TableCell>
                                    <TableCell>{match.kills}</TableCell>
                                    <TableCell>{match.assists}</TableCell>
                                    <TableCell>{match.deaths}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

User.propTypes = {
    fetchMatches: PropTypes.func.isRequired,
    fetchHeroes: PropTypes.func.isRequired,
    matches: PropTypes.array,
    heroes: PropTypes.array,
};

const mapStateToProps = state => ({
    matches: state.matches,
    heroes: state.heroes,
});

export default connect(mapStateToProps, {fetchHeroes, fetchMatches})(User);
