import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        width: '60%',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },

    pos: {
        marginBottom: 12,
    },
};

function UserWords(props) {
    const { classes } = props;

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Word Map
                </Typography>
            </CardContent>

        </Card>
    );
}

UserWords.propTypes = {
    classes: PropTypes.object.isRequired,
    words: PropTypes.array,
};

export default withStyles(styles)(UserWords);