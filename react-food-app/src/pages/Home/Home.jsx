import React, { useState } from 'react'
import "./home.css"
import Header from '../../Component/Header/Header'
import Exploremenu from '../../Component/Exploremenu/Exploremenu'
import FoodDisplay from '../../Component/Food display/FoodDisplay'
import Appdownload from '../../Component/Appdownload/Appdownload'




export default function Home() {

      const [category,setCategory] = useState("All")



    return (
        <div>
            
    <Header/>
    <Exploremenu category={category} setCategory={setCategory}/>
    <FoodDisplay  category={category}/>
    <Appdownload/>
        </div>
    )
};










