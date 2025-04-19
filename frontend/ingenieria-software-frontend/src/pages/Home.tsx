import React, {useEffecs, useState} from 'react';
import CafeteriaCard from '../components/CafeteriaCard';
import { fetchCafeterias } '../utils/api'


const Home => React.FC = () => {

    const [cafeterias, setCafeterias] = useState<any[]>([]);

    useEffecs(() => {

	const getCafeterias = async () => {

	    const data = await fetchCafeterias();
	    setCafeterias(data);	    

	};
	
	getCafeterias();

    }, []);

    return <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
	{cafeterias.map((cafeteria) => (
	    <CafeteriaCard
	    key={cafeteria.id}
	    name={cafeteria.name}
	    location={cafeteria.location}
	    imageUrl={cafeteria.imageUrl}
		/>
	))};



