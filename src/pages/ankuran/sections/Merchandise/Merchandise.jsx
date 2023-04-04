import React from "react";
import { Link } from 'react-router-dom';
import { GroupMerchandise } from "../../../../constants/images";
import'./merchandise.scss';
const Merchandise=()=>{
    return(
        <div className="merchandise_container">
          <h1 className="merchandise_mainheading">GRAB THE LATEST OFFICIAL MERCHANDISE OF ANAKHRONOS</h1>
          <div className="merchandise_content">
            <div className="merchandise_image">
                <img src={GroupMerchandise} alt="" />
            </div>
            <div className="merchandise_description">
                <h1 className="merchandise_heading"> lorem ipsum</h1>
                <p className="merchandise_heading_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Totam esse et nisi repellat reprehenderit ratione enim praesentium eius,
                     aspernatur reiciendis accusamus quis sint deleniti nam. Beatae dolorum suscipit officia nam.</p>
                     <Link class="mega-events-a bnt-more merchandise_button" to={`aa`}>
                        Grab it
                        </Link>
            </div> 
          </div>
            
        </div>
    )
}
export default Merchandise;