import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { showUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        this.props.showUserProfile(this.props.match.params.userId);
    }

    render() {
        return(
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

export default compose(
    connect(mapStateToProps, { showUserProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);