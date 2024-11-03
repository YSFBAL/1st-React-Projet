import React from 'react'
import ProfileHeader from './ProfileHeader'
import '../styles/profile.css';
import userImage from '../assets/image1.png';
import {BiBook} from 'react-icons/bi'

const skills=[{
  title:'Java SpringBoot',
  durarion:'120 hours',
  icon:<BiBook/>,
},{
  title:'JavaScript ReactJs',
  durarion:'120 hours',
  icon:<BiBook/>,
},{
  title:'Php Laravel',
  durarion:'120 hours',
  icon:<BiBook/>,
}

]
const Profile = () => {
  return (
    <div className="profile">
        <ProfileHeader/>
        <div className="user--profile">
          <div className="user--details">
            <img src={userImage} alt="" />
            <h3 className="username">BAALI Youssef</h3>
            <span className="profession">Developer </span>
          </div>
          <div className="user-skills">
              {skills.map(skill=><div className="skill">
                <div className="skill--details">
                  <div className="skill--cover">
                    {skill.icon}
                  </div>
                  <div className="skill--name">
                    <h5 className='skill--title'>{skill.title}</h5>
                    <span className="skill--duration">{skill.durarion}</span>
                  </div>
                </div>
                <div className="action">:</div>
              </div>)}
          </div>
        </div>
      
    </div>
  )
}

export default Profile
 