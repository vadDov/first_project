import React from 'react';
import css from './Users.module.css';
import userPhoto from './../../assets/images/user_photo.png';
import Preloader from '../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../API/app';

let Users = (props) => {
        let totalPages = Math.ceil(props.totalCount / props.pageSize);
        let pages = []

        for(let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
    return(
        <div className = { css.usersPage }>
                {
                    props.users.map( (user) => {
                        return  <div className={ css.window } key={ user.id }>
                                    <div className={ css.img_and_status }>

                                        <NavLink to = {`/profile/${user.id}`} className = { css.img_navlink }>
                                            <img className={ css.photo } src={ user.photos.small  ? user.photos.small : userPhoto } alt="" />
                                        </NavLink>

                                        { user.followed ? 
                                            <button disabled = { props.followingInProgress.some( id => id === user.id ) } className={ css.unsubscribe } onClick={ () => {
    
                                                props.toogleIsFollowingProgress(true, user.id)
                                                usersAPI.unfollow(user.id).then( data => {
                                                    if(data.resultCode == 0) {
                                                        props.unsubscribe(user.id)
                                                    }
                                                    props.toogleIsFollowingProgress(false, user.id)
                                                } )
                                            } }>unsubscribe</button>

                                            : <button disabled = { props.followingInProgress.some( id => id === user.id ) } className={ css.subscribe } onClick={ () => {
                                                
                                                props.toogleIsFollowingProgress(true, user.id)
                                                usersAPI.follow(user.id).then( data => {
                                                    if(data.resultCode == 0) {
                                                        props.subscribe(user.id) 
                                                    }
                                                    props.toogleIsFollowingProgress(false, user.id)
                                                } )
                                            } }>subscribe</button>}
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
                { props.isFetching && <Preloader /> }
                <div className={ css.totalPages }>
                    { pages.map( (p) => {
                        return <span onClick={ () => props.changeUsersPage(p) } key={ p }  className={ `${props.currentPage === p && css.active} ${css.page}` }>{ p }</span>
                    } ) }
                </div>
            </div>
    )
}

export default Users;