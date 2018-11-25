import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import WordCloud from "react-d3-cloud";

const styles = {
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
    const { classes, words } = props;
    let data = [];
    for(let key in words){
        data.push({
            text: key,
            value: words[key],
        })
    }
    data = data.sort((word1, word2) => (word2.value - word1.value));

    const fontSizeMapper = word => Math.log2(word.value) * 6;
    const rotate = word => word.value % Math.floor(Math.random() * Math.floor(360));

    return (
        <Card style={{width: ''}}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Word Map
                </Typography>
                <WordCloud data={data} fontSizeMapper={fontSizeMapper} rotate={rotate}/>

            </CardContent>
        </Card>
    );
}

UserWords.propTypes = {
    classes: PropTypes.object.isRequired,
    words: PropTypes.array,
};

export default withStyles(styles)(UserWords);