import React,{useState} from "react";
import "./style.css"
import Menu from "./Api.js";
import MenuCard from "./Main.js";
import Navbar from "./NavBar.js";







const Resturant=()=>{
    const uniQue =[...new Set (Menu.map((curElem)=>{
        return curElem.category
    }
)
),"All"]
    console.log(uniQue)
   

    const[menuData,setMenuData] = useState(Menu)
    const [menuList,setMenuList]=useState(uniQue)
    const filter_item =(category)=>{
        if(category ==="All"){
            setMenuData(Menu)
            return
        }
           const updat=Menu.filter((curElem)=>{
                  return curElem.category === category

           });
        setMenuData(updat)
    }

    
    return(
    <>

        <Navbar filter_item={filter_item} menuList={menuList}/>
         <MenuCard menuData={menuData}/>
    </>
   
   )

}

export default Resturant