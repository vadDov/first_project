import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUser } from '../../redux/auth-reducer';
import { usersAPI } from '../../API/app';

class HeaderComponent extends React.Component {

    componentDidMount = () => {
        usersAPI.getAuth().then( data => {
            let { id, login, email } = data.data
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