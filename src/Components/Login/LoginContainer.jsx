import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './Login';
import { submitLoginForm } from '../../redux/login-reducer'

class LoginContainer extends React.Component {

    render() {
        return (
            <LoginForm {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.form.login,
        password: state.form.password,
        remember: state.form.remember
    }
}



export default connect(mapStateToProps, { submitLoginForm })(LoginContainer)