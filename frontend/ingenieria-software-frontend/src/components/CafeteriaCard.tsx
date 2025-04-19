import React from 'react'


type Cafeteria = {
    
    name: string; 
    location: string:
    imageUrl: string;
    
};

const CafeteriaCard: React.FC<Cafeteria> = ({name, location, imageUrl}) => {

    return (
	
	<div= className:"card"> 
	    <img= className:"w-full" src={imageUrl} alt={name} />
	    <div= className:"p-4">
	    <h2= className:"font-bold text-xl">{name}</h2>
	    <p= className:"text-gray-500">{location}</p>
	
	</div>
      </div>
    );
};

export default CafeteriaCard;
