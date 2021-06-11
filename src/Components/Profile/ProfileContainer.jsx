import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        userId = userId || 2
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then( (response) => {
            this.props.setUserProfile(response.data);
        } )
    }

    render() {
        return(
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let mapDispatchToProps = { setUserProfile };

let withRouterProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(withRouterProfileContainer);