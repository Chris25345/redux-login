import React from 'react'
import { useDispatch } from 'react-redux';
import './Logout.css';
import { logout, selectUser } from '../features/userSlice'
import { useSelector } from 'react-redux';

function Logout() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  function handleLogout(e) {
    e.preventDefault();
    dispatch(logout())
  }

  return (
    <div className='logout'>
      <h1>Welcome, <span className='user__name'>{user.name}</span></h1>
      <button className='logout__button' onClick={(e) => handleLogout(e)}>Logout</button>
    </div>
  )
}

export default Logout

