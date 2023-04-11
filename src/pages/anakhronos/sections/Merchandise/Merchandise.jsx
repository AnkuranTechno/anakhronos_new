import React from "react";
// import { Link } from 'react-router-dom';
// import { GroupMerchandise } from "../../../../constants/images";
import'./merchandise.scss';
const Merchandise=()=>{
    return(
	// <div class="row">
		<div class="app__section merchandise bgcolour_merchandise">
			<div class="card">
				<div class="cover item-a">
					<h1>Merchandise<br/>2023</h1>
					<span class="price">Rs 400</span>
					<div class="card-back">
						<a href="/login">Enquire</a>
						<a href="/login">Buy Now</a>
					</div>
				</div>
			</div>
		{/* </div> */}
			<div class="card">
				<div class="cover item-b">
					<h1>Merchandise<br/>2022</h1>
					<span class="price">Check it now</span>
					<div class="card-back">
						<a href="/login">Enquire</a>
					</div>
				</div>
			</div>
			<div class="card">
				<div class="cover item-c">
					<h1>Merchandise<br/>2020</h1>
					<span class="price">Check it now</span>
					<div class="card-back">
						<a href="/login">Enquire</a>
					</div>
				</div>
		</div>
	</div>
    )
}
export default Merchandise;
