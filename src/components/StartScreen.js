import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/es/Grid/Grid";
import Paper from "@material-ui/core/es/Paper/Paper";
import withStyles from "@material-ui/core/es/styles/withStyles";
import TextField from "@material-ui/core/es/TextField/TextField";
import Button from "@material-ui/core/es/Button/Button";
import {OPEN_DOTA_API} from "../actions/types";
import CardMedia from "@material-ui/core/es/CardMedia/CardMedia";
import Typography from "@material-ui/core/es/Typography/Typography";
import Link from "react-router-dom/es/Link";

class StartScreen extends Component {
    constructor(){
        super();
        this.state = {
            players: '',
            currentUsername: '',
            searchResults: '',
        };
    }

    styles = theme => ({
        root: {
            flexGrow: 1,
            maxWidth: 600,
            padding: theme.spacing.unit * 2,
        },
        image: {
            width: 128,
            height: 128,
        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
        },
        button: {
            margin: theme.spacing.unit,
        },
    });

    saveUsername(username){
        this.setState({ currentUsername: username.target.value});
    };

    getUsersByUsername(){
        let username = this.state.currentUsername;
        fetch(OPEN_DOTA_API + '/search?q='+ username)
            .then(res => res.json())
            .then(players => {
                console.log(typeof players);
                this.setState({players:
                    players.map(player => {
                        console.log(player);
                        return (<Link to={{
                                pathname: '/user',
                                state: { linkState: {player}}
                            }}>
                            <Grid item xs={12}>
                                <Grid item xs={2}>
                                    <CardMedia style={{width: "40%", paddingTop: '40%'}}
                                               image={player.avatarfull} title="title"/>
                                </Grid>
                                <Grid item xs={10}>
                                    <Typography component="h5" variant="h5">
                                        {player.personaname}
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        Last played: {player.last_match_time}
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        Account id: {player.account_id}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Link>
                        );
                    })
                    ,})
            })
    }


    render(){
        return(
            <div>
            <Paper className={this.styles.root}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={16}
                >
                    <Grid row sm={11}>
                        <Grid item xs container direction="column" spacing={16}>
                            <Grid item>
                                <TextField
                                    id="standard-full-width"
                                    style={{ margin: 8 }}
                                    helperText="Search by username"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={e => this.saveUsername(e)}
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xl={1} sm container>
                        <Button color="primary" className={this.styles.button} onClick={this.getUsersByUsername.bind(this)} >
                            Search
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={this.styles.root}>
                {this.state.players}
                <Link to="/heroes">
                <Grid item xs={12} xl container>
                    <Grid item xs={2}>
                        <CardMedia style={{width: "40%", paddingTop: '40%'}}
                                   image="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/f3/f3ad758352824c39f5d1c7118c3848546c7b03c4_full.jpg" title="title"/>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography component="h5" variant="h5">
                            username
                        </Typography>
                        <Typography variant="subtitle1">
                            Mac Miller
                        </Typography>
                        <Typography variant="subtitle1">
                            userid
                        </Typography>

                    </Grid>
                </Grid>
                </Link>
            </Paper>
            </div>
            /*<Grid
                container
                justify="center"
                alignItems="center"
            >
                <Grid item xs={4}>
            </Grid>*/
        );
    }
}

StartScreen.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default  withStyles(this.styles)(StartScreen);