import React from 'react';
import { connect } from 'react-redux';
import { usersAPI } from '../../API/app';
import { subscribe, unsubscribe, getUsers } from '../../redux/users-reducer';
import Users from './Users';

class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)

    }

    changeUsersPage = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return(
            <Users  users = { this.props.users }
                    changeUsersPage = { this.changeUsersPage }
                    unsubscribe = { this.props.unsubscribe }
                    subscribe = { this.props.subscribe }
                    totalCount = { this.props.totalCount }
                    pageSize = { this.props.pageSize }
                    currentPage = { this.props.currentPage }
                    isFetching = { this.props.isFetching }
                    followingInProgress = { this.props.followingInProgress }
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         subscribe: (userId) => {
//             dispatch(subscribeAC(userId));
//         },
//         unsubscribe: (userId) => {
//             dispatch(unsubscribeAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setUsersTotalCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toogleIsFetching: (isFetching) => {
//             dispatch(toogleIsFetchingAC(isFetching))
//         }
//     }
// };

let mapDispatchToProps = { subscribe, unsubscribe, getUsers }

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);

export default UsersContainer;