import React from 'react'
import '../styles/teacherList.css'
import Image1 from '../assets/image1.png'
const teachers=[
    {
        image:Image1,
        name:'Mr. BAALI Youssef',
        duration:'120 hours lesson',
        cost:'120',
    },
    {
      image:Image1,
      name:'Mr. BAALI Youssef',
      duration:'120 hours lesson',
      cost:'120',
  },
  {
    image:Image1,
    name:'Mr. BAALI Youssef',
    duration:'120 hours lesson',
    cost:'120',
},
{
  image:Image1,
  name:'Mr. BAALI Youssef',
  duration:'120 hours lesson',
  cost:'120',
}
] 
const TeacherList = () => {
  return (
    <div className="teacher--list">
      <div className="list--header">
        <h2>Developers</h2>
        <select>
            <option value="français">Français</option>
            <option value="anglais">Anglais</option>
        </select>
      </div>
       <div className="list--container">
        {teachers.map((teacher)=>
            <div className="list">
              <div className="teacher--details">
              <img className="img" src={teacher.image} alt={teacher.name} />
              <h3>{teacher.name}</h3>
              </div>
              <span>{teacher.duration}</span>
              <span>${teacher.cost}/hr.</span>
              <span className="teacher--todo">:</span>
            </div>
            
        )}
       </div>
    </div>
  )
}

export default TeacherList
