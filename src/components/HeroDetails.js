import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

class HeroDetails extends Component {

    constructor(){

        super();
        this.state = {
            currentHero : {},
        };
    }

    componentWillMount() {
        this.setState({currentHero:this.props.location.state.linkState});
        console.log(this.props.location.state.linkState.hero.roles);
    }

    calculateHeroHealth(baseStr){
        return parseInt(baseStr) * 18 + 200;
    }

    calculateHeroMana(baseInt) {
        return parseInt(baseInt) * 12 + 75;
    }

    renderAttackRangeForRangedHeroesOnly(attackType){
        if(attackType === 'Ranged'){
            return <Typography>
                <h4 style={{display:'inline-block', margin: '5px'}}>Attack range : </h4>{this.state.currentHero.hero.attack_range}
            </Typography>
        }
    }

    render() {
        return ( <Card style={{width: '50%', height: '30%', display: 'inline-block', margin: '10px'}} key={this.state.currentHero.hero.id}>
                <CardMedia style={{height: 0, paddingTop: '30.25%'}}
                           image={`https://api.opendota.com${this.state.currentHero.hero.img}`} title="title"/>
                <CardContent>


                    <Typography gutterBottom variant="headline" component="h2">
                        {this.state.currentHero.hero.localized_name}
                    </Typography>
                    <Typography gutterBottom variant="headline" component="h2">
                        <img style={{width: '5%'}}
                             src='https://cdn.iconscout.com/icon/premium/png-256-thumb/medical-heart-heartcare-care-healthcare-treatment-health-27479.png'/>
                        <span>{this.calculateHeroHealth(this.state.currentHero.hero.base_str)}</span>
                        <img style={{width: '5%'}}
                             src='https://cdn2.iconfinder.com/data/icons/game-1-2/512/mana_potion_1-512.png'/>
                        <span>{this.calculateHeroMana(this.state.currentHero.hero.base_int)}</span>
                    </Typography>
                    <Typography component="stats">
                        <img
                            src='http://cdn.dota2.com/apps/dota2/images/heropedia/overviewicon_int.png'/>
                        : {this.state.currentHero.hero.base_int} + {this.state.currentHero.hero.int_gain} per level
                        <img style={{paddingLeft: '20px'}}
                            src='http://cdn.dota2.com/apps/dota2/images/heropedia/overviewicon_str.png'/> : {this.state.currentHero.hero.base_str} + {this.state.currentHero.hero.str_gain} per
                        level
                        <img style={{paddingLeft: '20px'}}
                            src='http://cdn.dota2.com/apps/dota2/images/heropedia/overviewicon_agi.png'/> : {this.state.currentHero.hero.base_agi} + {this.state.currentHero.hero.agi_gain} per
                        level
                    </Typography>
                    <Typography>
                        <h4 style={{display: 'inline-block'}}>Roles: </h4>
                        {this.state.currentHero.hero.roles.map(role =>{
                            return <span> {role} </span>
                        })}
                    </Typography>
                    <Typography>
                        <h4 style={{display:'inline-block', margin: '5px'}}>Attack type: </h4>{this.state.currentHero.hero.attack_type}
                    </Typography>
                    {this.renderAttackRangeForRangedHeroesOnly(this.state.currentHero.hero.attack_type)}
                    <Typography>
                        <h4 style={{display:'inline-block', margin: '5px'}}>Legs: </h4>{this.state.currentHero.hero.legs}
                    </Typography>
                    <Typography>
                        <h4 style={{display:'inline-block', margin: '5px'}}>Move speed : </h4>{this.state.currentHero.hero.move_speed}
                    </Typography>
                    <Typography>
                        <h4 style={{display:'inline-block', margin: '5px'}}>Pro matches that this hero was picked last month: </h4>{this.state.currentHero.hero.pro_pick} of 931 matches
                    </Typography>
                    <Typography>
                        <h4 style={{display:'inline-block', margin: '5px'}}>Pro matches that this hero was banned last month: </h4>{this.state.currentHero.hero.pro_ban} of 931 matches
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default HeroDetails;
