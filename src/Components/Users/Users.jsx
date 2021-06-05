import axios from 'axios';
import React from 'react';
import css from './Users.module.css';
import userPhoto from './../../assets/images/user_photo.png';

class Users extends React.Component {

    
    
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
        console.log(this.props);
        let totalPages = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages = []

        for(let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }

        return(
            <div className = { css.usersPage }>
                {
                    this.props.users.map( (user) => {
                        return  <div className={ css.window } key={ user.id }>
                                    <div className={ css.img_and_status }>
                                        <img className={ css.photo } src={ user.photos.small  ? user.photos.small : userPhoto } alt="" />
                                        { user.followed ? <button className={ css.unsubscribe } onClick={ () => { this.props.unsubscribe(user.id) } }>unsubscribe</button>
                                                        : <button className={ css.subscribe } onClick={ () => { this.props.subscribe(user.id) } }>subscribe</button>}
                                    </div>
                                    <div className={ css.info }>
                                        <div>
                                            <div className={ css.top }>
                                                <div className={ css.full_name }>{ user.name }</div>
                                                <div className={ css.location }>
                                                    <p>{ 'user.location.city_name' }</p>
                                                    <p>{ 'user.location.country' }</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={ css.status }>{ user.status }</div>
                                    </div>
                                </div>
                    } )
                }
                <div className={ css.totalPages }>
                    { pages.map( (p) => {
                        return <span onClick={ () => this.changeUsersPage(p) }  className={ `${this.props.currentPage === p && css.active} ${css.page}` }>{ p }</span>
                    } ) }
                </div>
            </div>
        )
    }
}

export default Users;