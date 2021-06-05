import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPageAC, setUsersAC, subscribeAC, unsubscribeAC, setUsersTotalCountAC } from '../../redux/users-reducer';
import Users from './Users';

class UsersAPIContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then( response => {
            this.props.setUsers(response.data.items);
            this.props.setUsersTotalCount(response.data.totalCount);
        } )
    }

    changeUsersPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then( response => {
            this.props.setUsers(response.data.items)
        } )
    }

    render() {
        return(
            <Users  users = { this.props.users }
                    changeUsersPage = { this.changeUsersPage }
                    unsubscribe = { this.props.unsubscribe }
                    subscribe = { this.props.subscribe }
                    totalCount = { this.props.totalCount }
                    pageSize = { this.props.pageSize }
                    currentPage = { this.props.currentPage }/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        subscribe: (userId) => {
            dispatch(subscribeAC(userId));
        },
        unsubscribe: (userId) => {
            dispatch(unsubscribeAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setUsersTotalCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);

export default UsersContainer;