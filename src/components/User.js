import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class User extends Component {
    componentWillMount() {
    }

    render() {
        /*const postItems = this.props.heroes.map(hero => (
          <div key={hero.id}>
            <h3>{hero.localized_name}</h3>
            <p>{hero.attack_type}</p>
          </div>
        ));*/
        return (
            <div>
                <h1>User</h1>

            </div>
        );
    }
}

User.propTypes = {
    fetchWords: PropTypes.func.isRequired,
};

export default connect({ fetchWords })(User);
