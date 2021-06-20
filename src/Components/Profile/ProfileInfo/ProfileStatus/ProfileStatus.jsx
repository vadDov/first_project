import React from 'react';
import css from '../ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    
    state = {
        aditMode: false,
        status: this.props.status
    }
    activeAdditeModes = () => {
        console.log(this.props.status);
        console.log(this.state.status);
        this.setState({
            aditMode: true
        })
    }
    deactivateAdditeModes(event) {
        this.setState({
            aditMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onChangeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    render() {
        return(
            <div className = { css.status }>
                { !this.state.aditMode && <div><span  onDoubleClick = { this.activeAdditeModes }>Status: { this.props.status || '----------' }</span></div> }
                { this.state.aditMode && <div><input onChange = { this.onChangeStatus } autoFocus = { true }  onBlur = { this.deactivateAdditeModes.bind(this) } type="text" value = { this.state.status }/></div> }
            </div>
        )
    }
}

export default ProfileStatus;