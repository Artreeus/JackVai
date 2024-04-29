
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import CoffeeCard from './../CoffeeCard';


function MyList() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);


  return (
    <div className='m-20'>
      <div className='grid-cols-1  gap-4'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default MyList;
