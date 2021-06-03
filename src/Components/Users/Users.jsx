import React from 'react';
import css from './Users.module.css';


const Users = (props) => {

    if(props.users.length === 0) {
        props.setUsers([
            { id:1, photoUrl: 'https://www.vokrug.tv/pic/person/e/b/f/1/ebf14965f14a2a2bf01dbc0e34d5f3b6.jpg', subscription: true, full_name: 'Vadim D', status: 'I am a boss!', location: { city_name: 'Osipivichi', country: 'Belarus' } },
            { id:2, photoUrl: 'https://www.vokrug.tv/pic/person/e/b/f/1/ebf14965f14a2a2bf01dbc0e34d5f3b6.jpg', subscription: false, full_name: 'Andrei D', status: 'I am a boss2!', location: { city_name: 'Moscow', country: 'Russia' } },
            { id:3, photoUrl: 'https://www.vokrug.tv/pic/person/e/b/f/1/ebf14965f14a2a2bf01dbc0e34d5f3b6.jpg', subscription: true, full_name: 'Vlad D', status: 'I am a boss3!', location: { city_name: 'Kiev', country: 'Ukraine' } },
        ]);
    }
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