import React from 'react';
import css from './Login.module.css';
import { Form, Field } from 'react-final-form';


const LoginForm = (props) => {
    return(
        <div className = { css.login_block }>
            <Form
            onSubmit = {props.submitLoginForm}
            render = {({handleSubmit}) => (
                <form onSubmit = {handleSubmit}>
                    <div>
                        <Field name = 'login' component = 'input' placeholder = 'login'/>
                    </div>
                    <div>
                        <Field name = 'password' component = 'input' placeholder = 'password'/>
                    </div>
                    <div>
                        <Field name = 'remember' component = 'input' type = 'checkbox'/>remember me
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                </form>
            )}
        />
        </div>
    )
}

export default LoginForm;
