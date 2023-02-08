import { component$, Resource, useResource$ } from '@builder.io/qwik';
import type { Beer } from './beer.type';



export const BeerSelector = component$(() => {

  const beersResource = useResource$<Beer[]>(async () => {
    
    const response = await fetch('http://localhost:5173/api/beers');
    return response.json();  
    
  });
  

  return <div>
    
    <Resource value={beersResource}
      onPending={() => <span>loading...</span>}
      onResolved={(beers) =>
        <select>
          {beers.map((beer) => { 
            return <option value={beer.id}>{beer.name}</option>  
          })}
          
        </select>
      }
      onRejected={(reason) => <span>Sorry no beers :( {reason.toString()}</span>} 
    />
    
  </div>
});