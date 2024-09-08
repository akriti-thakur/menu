import React from "react"

const Navbar=({filter_item,menuList})=>{
    return(<>
<nav className="navbar">
            <div className="btn-group">
             

                {menuList.map((current)=>
                <button className="btn-group_item" onClick={()=> filter_item(current)}>{current}</button>
                
                )}
            </div>
            
        </nav>
    </>
)
}

export default  Navbar