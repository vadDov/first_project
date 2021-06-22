import React from 'react';
import { connect } from 'react-redux';
import { autorization } from '../../redux/auth-reducer';
import Header from './Header';



class HeaderComponent extends React.Component {

    componentDidMount = () => {
        this.props.autorization();
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
    autorization
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);