import { component$, Resource, Signal, useResource$, useSignal, useTask$ } from '@builder.io/qwik';



export default component$(() => {
  const isMiskoVisibleSignal = useSignal(true);
  const gotBeerSignal = useSignal(false);

  useTask$(async ({ track }) => {
    track(() => gotBeerSignal.value);

    if (gotBeerSignal.value) {
      isMiskoVisibleSignal.value = true;
    }
  })
  return (
    <div >
      
      <div>Hello World!</div>
      
      <BeerGiver gotBeerSignal={gotBeerSignal} />
      
      {/* <BeerGiver onBeerGiven$={(beerGiven) => {
        gotBeerSignal.value = beerGiven;
      }}/> */}

      {
        isMiskoVisibleSignal.value ? <Misko/>  : null
      }
    </div>
  );
});

interface BeerGiverProps{
  gotBeerSignal: Signal<boolean>; 
  // onBeerGiven$: PropFunction<(beerGiven: boolean)=>void>
}

export const BeerGiver = component$((props: BeerGiverProps) => {

  return <div>
    <button onClick$={() => {
      // props.onBeerGiven$(true);
      props.gotBeerSignal.value = true;
    }}>Give Misko a Beer</button>
  </div>
})

export const Misko = component$(() => {
  console.log('MISKO');
  const beersResource = useResource$(async () => {
    console.log('RESOURCE SERVER');
    const response = await fetch('https://api.sampleapis.com/beers/ale');
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('RESOURCE CLIENT');
    return response.json();
  })

  return <div>
    Hi I'm Misko!

    <Resource
      value={beersResource}
      onPending={() => <div>loading...</div>}
      onRejected={()=> <div>OMG NO!!! NO BEERS!!!</div>}
      onResolved={(beers) => {
        return <div>
        <p>I like these beers:</p>
  
        <ul>
          {beers.map((beer: any) => <li>{ beer.name}</li>)}
          
        </ul>
  
  
      </div>
      }
      
      }
    />
    
  </div>
})