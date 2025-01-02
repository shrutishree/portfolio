import './App.css';
import React from 'react';

const contactList = [
  // {
  //   id: 1,
  //   name: "Contact"
  // },
  {
    id: 1,
    name: "Resume"
  },
  {
    id: 2,
    name: "Project"
  }
]
const HeaderComponent = () => {
  return (
    <div className='headerComponent'>
      <h2>Shruti Shree</h2>
      <div className='contactList'>
        {contactList.map((data) => {
          return (
            <div>{data.name}</div>
          )
        })}
      </div>
    </div>
  )
}


export function HeaderBanner() {
  return (
    <div className="headerBanner">
      <header>
        <HeaderComponent />
      </header>
      <div className='profileSection'>
        <div className='profile'>
        <img src="/images/Shruti.jpeg" alt='shruti' />
          {/* <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt='shruti' /> */}
          <h3>Senior Software Developer, working with one of the digital services company providing software development services.</h3>
        </div>
        <div className='introSection'>
          <hr />
          <h3>Intro</h3>
          <p>I am a B.Tech graduate in Information Technology with hands-on experience in the IT industry, passionate about leveraging technology to create innovative solutions. Combining my technical skills with a love for music, I bring a unique, creative approach to problem-solving.</p>
        </div>
      </div>
    </div>
  );
}