import React from 'react';
import css from '../ProfileInfo.module.css';

class ProfileStatus extends React.Component {

    state = {
        aditMode: false
    }

    activeAdditeModes() {
        this.setState({
            aditMode: true
        })
    }
    deactivateAdditeModes() {
        this.setState({
            aditMode: false
        })
    }

    render() {

        return(
            <div className = { css.status }>
                { !this.state.aditMode && <div><span  onDoubleClick = { this.activeAdditeModes.bind(this) }>Status: Hellow Vadim!!!</span></div> }
                { this.state.aditMode && <div><input autoFocus = { true }  onBlur = { this.deactivateAdditeModes.bind(this) } type="text" value = 'Status: Hellow Vadim!!!'/></div> }
            </div>
        )
    }
}

export default ProfileStatus;