import React from 'react'
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import { Link } from "react-router-dom"
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <div className="info">
            <span>John</span>
            <p>posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora natus asperiores eos itaque eum culpa repellat, provident ducimus modi, soluta molestias voluptatem maxime molestiae veritatis id. Facilis adipisci quasi quisquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quidem, molestias saepe aliquam recusandae repellat. Dolores, facere provident sit exercitationem porro dolore! Dignissimos cum voluptatum sed dolorem blanditiis, reiciendis facilis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, non omnis excepturi eaque libero dolorum perferendis asperiores, distinctio ea reiciendis aspernatur incidunt, velit dolor. Fugiat sapiente eius neque itaque nemo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam adipisci aliquam, consequatur a nobis commodi, velit, obcaecati numquam reiciendis culpa minus similique. Sit libero similique animi. Cumque totam tenetur ipsa? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis pariatur alias vel, voluptas provident magni ipsam voluptatibus veniam soluta praesentium, quasi voluptatem nisi repellendus iste impedit perferendis error earum ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquam officiis eos harum, magnam odit error in nobis delectus explicabo quibusdam saepe, veniam nulla dolore numquam alias amet voluptas facere.</p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  )
}

export default Single