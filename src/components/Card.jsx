import { BiBuilding, BiLogoAndroid, BiLogoHtml5 } from 'react-icons/bi'

const courses=[
    {
     title:'Web Developement',
     icon:<BiLogoHtml5/>,
    },
    {
        title:'App Developement',
        duration: '4 hours',
        icon:<BiLogoAndroid/>,
    }, 
    {
        title:'UI & UX ',
        duration: '2 hours',
        icon:<BiBuilding/>,
       },
];

const Card = () => {
  return (
    <div className="card--container">
       {courses.map((item)=>(
        <div className="card">
            <div className="card--cover">{item.icon}</div>
            <div className="card--title">
                <h2>{item.title}</h2>
            </div>
        </div>
       ))}
    </div>
  )
}

export default Card
