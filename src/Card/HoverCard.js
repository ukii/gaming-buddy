import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

class HoverCard extends Component {

    constructor(props) {
        super();
        const { hero } = props;
        this.state = {
            currentHero : hero
        }
    }

    render() {
        return (
            <Card key={this.state.currentHero.id}>
                <CardMedia style={{ paddingTop: '56.25%', opacity:'0.5'}}
                           image={`https://api.opendota.com${this.state.currentHero.img}`} title="title"/>
                <CardContent style={{overflow: 'overlay', backgroundColor:'light-gray'}}>
                    <Typography>
                        <h4 style={{display: 'inline-block', margin: '1px', fontSize:'12px'}}>Roles: </h4><span style={{fontSize:'12px'}}>
                        {this.state.currentHero.roles.map(role =>{
                            return <span style={{fontSize:'12px'}}> {role} </span>
                        })}</span>
                    </Typography>
                    <Typography>
                        <h4 style={{display:'inline-block', margin: '1px', fontSize:'12px'}}>Attack type: </h4><span style={{fontSize:'12px'}}>{this.state.currentHero.attack_type}</span>
                    </Typography>
                    <h4 style={{display:'inline-block', margin: '1px', fontSize:'12px'}}>Attack type: </h4><span style={{fontSize:'12px'}}>{this.state.currentHero.attack_range}</span>
                    <Typography>
                        <h4 style={{display:'inline-block', margin: '1px', fontSize:'12px'}}>Legs: </h4><span style={{fontSize:'12px'}}>{this.state.currentHero.legs}</span>
                    </Typography>
                    <Typography>
                        <h4 style={{display:'inline-block', margin: '1px', fontSize:'12px'}}>Move speed : </h4><span style={{fontSize:'12px'}}>{this.state.currentHero.move_speed}</span>
                    </Typography>
                    <Typography>
                        <h4 style={{display:'inline-block', margin: '1px', fontSize:'12px'}}>Pro matches that this hero was picked last month: </h4><span style={{fontSize:'12px'}}>{this.state.currentHero.pro_pick} of 931 matches</span>
                    </Typography>
                    <Typography>
                        <h4 style={{display:'inline-block', margin: '1px', fontSize:'12px'}}>Pro matches that this hero was banned last month: </h4><span style={{fontSize:'12px'}}>{this.state.currentHero.pro_ban} of 931 matches</span>
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

HoverCard.propTypes = {
    hero: PropTypes.object,
};

export default HoverCard;