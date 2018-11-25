import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class MenuBar extends Component {


    styles = {
        root: {
            flexGrow: 1,
        },
        grow: {
            flexGrow: 1,
        },
        menuButton: {
            marginLeft: -12,
            marginRight: 20,
        },
    };

    render() {
        return (<div className={this.styles.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" className={this.styles.grow}>
                            Gaming Buddy
                        </Typography>
                        <Button href="/heroes" color="inherit">Heroes</Button>
                        <Button href="/user" color="inherit">User</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}


export default MenuBar;
