import React from 'react';
import { connect } from 'react-redux';
import { usersAPI } from '../../API/app';
import { setCurrentPage, setUsers, subscribe, unsubscribe, setUsersTotalCount, toogleIsFetching } from '../../redux/users-reducer';
import Users from './Users';

class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.toogleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then( data => {
            this.props.setUsers(data.items);
            this.props.toogleIsFetching(false);
            this.props.setUsersTotalCount(data.totalCount);
        } )
    }

    changeUsersPage = (pageNumber) => {
        this.props.toogleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then( data => {
            this.props.setUsers(data.items)
            this.props.toogleIsFetching(false);
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
                    currentPage = { this.props.currentPage }
                    isFetching = { this.props.isFetching }/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching
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

let mapDispatchToProps = { subscribe, unsubscribe, setUsers, setCurrentPage, setUsersTotalCount, toogleIsFetching }

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);

export default UsersContainer;