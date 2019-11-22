import React, { Component } from 'react'


const UserInfo = (props) => {
    return(
        <div className='topLeft'>
            <img src={require('./avatar.png')} alt="" height="25" width="25"></img>
            <span>Cenk Donmez</span>
        </div>
    ); 
}

export default UserInfo;


