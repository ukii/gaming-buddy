import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

class BaseCard extends Component {

    constructor(props) {
        super();
        const { hero } = props;
        this.state = {
            currentHero : hero
        }
    }

    calculateHeroHealth(baseStr){
        return parseInt(baseStr) * 18 + 200;
    }

    calculateHeroMana(baseInt) {
        return parseInt(baseInt) * 12 + 75;
    }



    render() {
        return (
            <Card zDepth='10' key={this.state.currentHero.id}>
                <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                           image={`https://api.opendota.com${this.state.currentHero.img}`} title="title"/>
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        <img style={{width: '15%'}}
                             src='https://cdn.iconscout.com/icon/premium/png-256-thumb/medical-heart-heartcare-care-healthcare-treatment-health-27479.png'/> : {this.calculateHeroHealth(this.state.currentHero.base_str)}
                        <img style={{width: '15%'}}
                             src='https://cdn2.iconfinder.com/data/icons/game-1-2/512/mana_potion_1-512.png'/> : {this.calculateHeroMana(this.state.currentHero.base_int)}
                    </Typography>
                    <Typography gutterBottom variant="headline" component="h2">
                        {this.state.currentHero.localized_name}
                    </Typography>
                    <Typography component="int">
                        <img
                            src='http://cdn.dota2.com/apps/dota2/images/heropedia/overviewicon_int.png'/> : {this.state.currentHero.base_int} + {this.state.currentHero.int_gain} per
                        level
                    </Typography>
                    <Typography component="str">
                        <img
                            src='http://cdn.dota2.com/apps/dota2/images/heropedia/overviewicon_str.png'/> : {this.state.currentHero.base_str} + {this.state.currentHero.str_gain} per
                        level
                    </Typography>
                    <Typography component="str">
                        <img
                            src='http://cdn.dota2.com/apps/dota2/images/heropedia/overviewicon_agi.png'/> : {this.state.currentHero.base_agi} + {this.state.currentHero.agi_gain} per
                        level
                    </Typography>
                </CardContent>
                <CardActions>
                    {/*<Button size="small" color="primary" href="" target="_blank">*/}
                        {/*<Link to={{*/}
                            {/*pathname: '/hero/details/1',*/}
                            {/*state: { linkState: {hero} }*/}
                        {/*}}> More about {this.state.hero.localized_name} </Link>*/}
                    {/*</Button>*/}
                </CardActions>
            </Card>
        );
    }
}

BaseCard.propTypes = {
    hero: PropTypes.object,
};

export default BaseCard;