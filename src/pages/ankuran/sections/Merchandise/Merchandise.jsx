import React from "react";
import { GroupMerchandise , MerchandiseModel } from "../../../../constants/images";
import LinkButton from "../LinkButton/LinkButton";
import'./merchandise.scss';
const Merchandise=()=>{
    return(
        <div className="merchandise_container">
            <div className="merchandise_wrapper">
            <h1 className="merchandise_heading">Get Your Merchandise Now!!</h1>
            <div className="merchandise_wrapper2">
            <img className="merchandise_groupmerchandise" src={GroupMerchandise}></img>
            <p className="merchandise_description"> ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem 
                ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum 
                lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem </p>
                {/* <img className="merchandise_modelmerchandise" src={MerchandiseModel}></img> */}
                <img className="merchandise_groupmerchandise" src={GroupMerchandise}></img>
           
            </div>
            <LinkButton title={"Get it Now!!"} render={""} />
            </div>
            
            
        </div>
    )
}
export default Merchandise;