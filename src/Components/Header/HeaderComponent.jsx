import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUser } from '../../redux/auth-reducer';

class HeaderComponent extends React.Component {

    componentDidMount = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then( (response) => {
            let { id, login, email } =  response.data.data
            this.props.setAuthUser(id, login, email);
            
        } )
    }

    render() {
        return(
            <Header { ...this.props } />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        data: state.auth
    }
}
let mapDispatchToProps = {
    setAuthUser
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);