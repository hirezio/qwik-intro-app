import { component$, Resource, useResource$ } from '@builder.io/qwik';

export interface Beer{
  name: string;
}

export const BeerSelector = component$(() => {

  const beersResource = useResource$<Beer[]>(async () => {
    const result = await fetch('http://localhost:5173/api/beers');
    return result.json();
  })
  
  return <div>
    <Resource value={beersResource}
      onPending={ () => <span>loading...</span> }
      onRejected={(reason) => <span>error...{reason}</span> }
      onResolved={(beers) => 
        <select>
          {beers.map((beer) => <option>{ beer.name }</option>)}
        </select>
      }
    />
    
  </div>
});