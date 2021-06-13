import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
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

let mapDispatchToProps = { showUserProfile };

let authRedirectComponent = withAuthRedirect(ProfileContainer)

let withRouterProfileContainer = withRouter(authRedirectComponent)

export default connect(mapStateToProps, mapDispatchToProps)(withRouterProfileContainer);