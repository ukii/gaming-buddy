import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import BaseCard from "./BaseCard";
import HoverCard from "./HoverCard";

class GamingBuddyCard extends Component {

    constructor(props) {
        super();
        const { hero } = props;
        this.state = {
            currentHero: hero,
            customHtml: <Card  style={{width: '17%', display: 'inline-block', margin: '10px'}} onMouseEnter={this.onMouseOver.bind(this)}
                               onMouseLeave={this.onMouseOut.bind(this)}><BaseCard
                hero={hero} />
            </Card>
        }
    }

    onMouseOver(){
        setTimeout(
            function() {
                this.setState({customHtml:   <Card  style={{width: '17%', display: 'inline-block', margin: '10px', height: '395px'}} onMouseEnter={this.onMouseOver.bind(this)}
                                                    onMouseLeave={this.onMouseOut.bind(this)}><HoverCard hero={this.state.currentHero} />
                    </Card>});
            }
                .bind(this),
            200
        );
    }

    onMouseOut(){
        setTimeout(
            function() {
                this.setState({customHtml:   <Card  style={{width: '17%', display: 'inline-block', margin: '10px'}} onMouseEnter={this.onMouseOver.bind(this)}
                                                    onMouseLeave={this.onMouseOut.bind(this)}><BaseCard hero={this.state.currentHero} />
                    </Card>});
            }
                .bind(this),
            200
        );
    }

    render() {
        return (
            <span>
                {this.state.customHtml}
            </span>
        );
    }
}

GamingBuddyCard.propTypes = {
    hero: PropTypes.object,
};

export default GamingBuddyCard;