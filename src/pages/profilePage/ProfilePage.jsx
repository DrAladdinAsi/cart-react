import React from 'react'
import './profilePage.scss'
import List from '../../components/list/List'
import Chat from '../../components/chat/Chat'

function ProfilePage() {
  return (
    <div className='profilePage'>
      <div className="details">
        <div className="wrapper">
         
        <div className="title">
            <h1>User Information</h1>
            <button>user profile</button>
          </div>
          <div className="user_info">
            <span>Avatar: <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="the user image" /></span>
            <span>Username : <b>Johne Doe</b></span>
            <span>E-mail : <b>johnedoe@gmail.com</b></span>
          </div>

          <div className="title">
            <h1>My List</h1>
            <button>create new post</button>
          </div>
          <List/>

          <div className="title">
            <h1>SavedList</h1>
          </div>
          <List/>
        </div>
      </div>
      <div className="chatContainer">
      <div className="wrapper">
        <Chat/>
      </div>
      </div>

    </div>
  )
}

export default ProfilePage