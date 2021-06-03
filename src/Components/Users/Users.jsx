import React from 'react';
import css from './Users.module.css';


const Users = (props) => {
    return(
        <div className = { css.usersPage }>
            {
                props.users.map( (user) => {
                    return  <div className={ css.window } key={ user.id }>
                                <div className={ css.img_and_status }>
                                    <img className={ css.photo } src={ user.photoUrl } alt="" />
                                    {/* <button onClick = { checkSubscription } className={ css.button }>subscribe</button> */}
                                    { user.subscription ? <button className={ css.unsubscribe } onClick={ () => { props.unsubscribe(user.id) } }>unsubscribe</button>
                                                        : <button className={ css.subscribe } onClick={ () => { props.subscribe(user.id) } }>subscribe</button>}
                                </div>
                                <div className={ css.info }>
                                    <div>
                                        <div className={ css.top }>
                                            <div className={ css.full_name }>{ user.full_name }</div>
                                            <div className={ css.location }>
                                                <p>{ user.location.city_name }</p>
                                                <p>{ user.location.country }</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={ css.status }>{ user.status }</div>
                                </div>
                            </div>
                } )
            }
        </div>
    )
}

export default Users;