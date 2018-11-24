import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


// COMPONENT

class HeroesPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            heroes: []
        };
    }

    getHeroes() {
        fetch('https://api.opendota.com/api/heroStats', {
            method: 'GET'
        }).then(res => res.json())
            .then(res => {
                this.setState({heroes: res});
            })
            .catch(e => {
                console.log('error', e);
            });
    }

    populateHeroHealthAcordingToStrength(){

        for(var i = 0 ; this.state.heroes.length; i++){
            console.log('1');
        }
    }

    componentDidMount() {
        this.getHeroes();
        this.populateHeroHealthAcordingToStrength();
    }

    render() {
        return (
            <div>
                <div>
                    <ul>
                        {this.state.heroes.map(function (hero) {
                            return <Card style={{width: '30%', display: 'inline-block', margin: '10px'}} key={hero.id}>
                                <CardMedia style={{height: 0, paddingTop: '56.25%'}} image={`https://api.opendota.com${hero.img}`} title="title"/>
                                <CardContent>
                                    <Typography gutterBottom variant="headline" component="h2">
                                        <img style={{width: '15%'}} src='https://cdn.iconscout.com/icon/premium/png-256-thumb/medical-heart-heartcare-care-healthcare-treatment-health-27479.png' /> : {hero.base_health}  <img style={{width: '15%'}} src='https://cdn2.iconfinder.com/data/icons/game-1-2/512/mana_potion_1-512.png' /> : {hero.base_mana}
                                    </Typography>
                                    <Typography gutterBottom variant="headline" component="h2">
                                        {hero.localized_name}
                                    </Typography>
                                    <Typography component="int">
                                        <img src='http://cdn.dota2.com/apps/dota2/images/heropedia/overviewicon_int.png' /> : {hero.base_int} + {hero.int_gain} per level
                                    </Typography>
                                    <Typography component="str">
                                        <img src='http://cdn.dota2.com/apps/dota2/images/heropedia/overviewicon_str.png' /> : {hero.base_str} + {hero.str_gain} per level
                                    </Typography>
                                    <Typography component="str">
                                        <img src='http://cdn.dota2.com/apps/dota2/images/heropedia/overviewicon_agi.png' /> : {hero.base_agi} + {hero.agi_gain} per level
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary" href="" target="_blank">
                                        More about {hero.localized_name}
                                    </Button>
                                </CardActions>
                            </Card>;
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export {HeroesPage};