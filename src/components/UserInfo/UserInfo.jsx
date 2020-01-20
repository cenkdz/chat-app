import React from 'react';

const UserInfo = () => <div className="userInfo">{localStorage.getItem('name')}</div>;

export default UserInfo;
