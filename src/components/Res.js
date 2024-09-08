import React,{useState} from "react";
import "./style.css"
import Menu from "./Api.js";
import MenuCard from "./Main.js";



const Resturant=()=>{


    const[menuData,setMenuData] = useState(Menu)
    const filter_item =(category)=>{
           const updat=Menu.filter((curElem)=>{
                  return curElem === category

           })
        setMenuData(updat)
    }

    
    return(
    <>

        <nav className="navbar">
            <div className="btn-group">
                <button className="btn-group_item" onClick={()=> filter_item('breakfast')}>Breakfast</button>
                <button className="btn-group_item"onClick={()=> filter_item('lunch')}>Lunch</button>
                <button className="btn-group_item"onClick={()=> filter_item('eveningt')}>Evening</button>
                <button className="btn-group_item"onClick={()=> filter_item('dinner')}>Dinner</button>

            </div>
            
        </nav>
         
         <MenuCard menuData={menuData}/>
    </>
   
   )

}

export default Resturant