// IMPORT PACKAGE REFERENCES
import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Heroes extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Card style={{width: '30%'}}>
                    <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                               image="https://images.unsplash.com/photo-1449130015084-2d48a345ae62?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bb29652e99f70314468e31f729b28f74&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"
                               title="title"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            Test Title
                        </Typography>
                        <Typography component="p">
                            Description
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" href="" target="_blank">
                            Go To Course
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

// EXPORT COMPONENT
export {Heroes};