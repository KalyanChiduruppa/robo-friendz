import React from 'react';
import Card from './Card';
const Cardlist = ({robots})=>{
	return(
		<React.StrictMode>
		     {
			 	robots.map((users,i) =>{
			 		return (
				 			<Card 
				 			key={i} 
				 			id={robots[i].id} 
				 			name={robots[i].name} 
				 			email={robots[i].email} />
			 			 	);
			 	})
			 }
		</React.StrictMode>
		);
	}
export default Cardlist;