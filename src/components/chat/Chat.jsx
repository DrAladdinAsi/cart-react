import React, { useState } from 'react'
import './chat.scss'

function Chat() {
    const [openChat , setOpenChat]=useState(true)
  return (
    <div className='chat'>
       <div className="messages">
          <div className="message" onClick={()=>setOpenChat(true)}>
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="the image of the user" />
            <span className="name">Johne Doe</span>
            <span className="messageDesc">Lorem ipsum dolor sit amet consectetur adipisicing ....</span>
          </div>

          <div className="message" onClick={()=>setOpenChat(true)}>
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="the image of the user" />
            <span className="name">Johne Doe</span>
            <span className="messageDesc">Lorem ipsum dolor sit amet consectetur adipisicing ....</span>
          </div>

          <div className="message" onClick={()=>setOpenChat(true)}>
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="the image of the user" />
            <span className="name">Johne Doe</span>
            <span className="messageDesc">Lorem ipsum dolor sit amet consectetur adipisicing ....</span>
          </div>

          <div className="message" onClick={()=>setOpenChat(true)}>
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="the image of the user" />
            <span className="name">Johne Doe</span>
            <span className="messageDesc">Lorem ipsum dolor sit amet consectetur adipisicing ....</span>
          </div>

        
          <div className="message" onClick={()=>setOpenChat(true)}>
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="the image of the user" />
            <span className="name">Johne Doe</span>
            <span className="messageDesc">Lorem ipsum dolor sit amet consectetur adipisicing ....</span>
          </div>



       </div>
      { openChat && 
       <div className="chatBox">
       <div className="top">

           <div className="accountInfo">
             <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="the image of the message account owner" />
             <span className="name">Johne Doe</span>
           </div>

        <span className="close" onClick={()=>setOpenChat(null)}>X</span>

       </div>
       <div className="center">
           <div className="chats">
               <div className="chat">
                   <span className='chat_text'>Lorem ipsum dolor sit amet</span>
                   <span className="chat_time">1 hour ago</span>
               </div>

               <div className="chat own">
                   <span className='chat_text'>Lorem ipsum dolor sit amet</span>
                   <span className="chat_time">1 hour ago</span>
               </div>

               <div className="chat">
                   <span className='chat_text'>Lorem ipsum dolor sit amet</span>
                   <span className="chat_time">1 hour ago</span>
               </div>

               <div className="chat own">
                   <span className='chat_text'>Lorem ipsum dolor sit amet</span>
                   <span className="chat_time">1 hour ago</span>
               </div>

               <div className="chat">
                   <span className='chat_text'>Lorem ipsum dolor sit amet</span>
                   <span className="chat_time">1 hour ago</span>
               </div>

               <div className="chat own">
                   <span className='chat_text'>Lorem ipsum dolor sit amet</span>
                   <span className="chat_time">1 hour ago</span>
               </div>

               <div className="chat">
                   <span className='chat_text'>Lorem ipsum dolor sit amet</span>
                   <span className="chat_time">1 hour ago</span>
               </div>



               <div className="chat own">
                   <span className='chat_text'>Lorem ipsum dolor sit amet</span>
                   <span className="chat_time">1 hour ago</span>
               </div>

               <div className="chat">
                   <span className='chat_text'>Lorem ipsum dolor sit amet</span>
                   <span className="chat_time">1 hour ago</span>
               </div>

               
               <div className="chat own">
                   <span className='chat_text'>Lorem ipsum dolor sit amet</span>
                   <span className="chat_time">1 hour ago</span>
               </div>

               <div className="chat">
                   <span className='chat_text'>Lorem ipsum dolor sit amet</span>
                   <span className="chat_time">1 hour ago</span>
               </div>

               
               <div className="chat own">
                   <span className='chat_text'>Lorem ipsum dolor sit amet</span>
                   <span className="chat_time">1 hour ago</span>
               </div>

               <div className="chat">
                   <span className='chat_text'>Lorem ipsum dolor sit amet</span>
                   <span className="chat_time">1 hour ago</span>
               </div>

               
               <div className="chat own">
                   <span className='chat_text'>Lorem ipsum dolor sit amet</span>
                   <span className="chat_time">1 hour ago</span>
               </div>

               <div className="chat">
                   <span className='chat_text'>Lorem ipsum dolor sit amet</span>
                   <span className="chat_time">1 hour ago</span>
               </div>

           </div>
       </div>
       <div className="bottom">
           <textarea ></textarea>
           <span>send</span>
       </div>
      </div>
      }
    </div>
  )
}

export default Chat