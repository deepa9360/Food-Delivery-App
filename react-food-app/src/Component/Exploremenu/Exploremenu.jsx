import React from 'react'
import './explore.css'
import { menu_list } from '../../assets/Food Del Frontend Assets/assets/assets'




export default function Exploremenu({category,setCategory}) {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1> Explore our menu</h1>
            <p className='explore-menu-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur ipsam perspiciatis, odit praesentium quia quaerat officia exercitationem veniam, unde dicta laudantium molestiae ab voluptate corrupti maiores cupiditate dignissimos illo provident!</p>

            <div className='explore-menu-list'>

                {menu_list.map((item,index) => {
                    return (

                        <div onClick={()=>setCategory (prev =>prev===item.menu_name?"All":item.menu_name)}key={index} className='explore-menu-list-item' >
                            <img className={category===item.menu_name?"active":""}src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}

            </div>
            <hr/>
        </div>
    )
}
