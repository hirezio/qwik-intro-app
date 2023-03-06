import { component$, Signal, Slot, useContext, useContextProvider, useResource$, useSignal, useTask$ } from '@builder.io/qwik';
import { beerContextId } from './beer-context-id';
import { BeerSelector } from './beer-selector';



export default component$(() => {
  const isMiskoVisibleSignal = useSignal(false);
  const didHeGetABeerSignal = useSignal(false);

  useContextProvider(beerContextId, didHeGetABeerSignal);
  
  useTask$(({track}) => {
    track(() => didHeGetABeerSignal.value);

    if (didHeGetABeerSignal.value) {
      isMiskoVisibleSignal.value = true;
    }
  })

  return (
    <>

      <BeerGiver />

      {isMiskoVisibleSignal.value ?
        <Misko>I love Shai</Misko>
        : null}
    </>
  );
});


export const BeerGiver = component$(() => {
  return <div>
    
    <hr/>

    <BeerGivingButton/>
    
  </div>;
})

export const BeerGivingButton = component$(() => {
  const gotBeerSignal = useContext(beerContextId);
  
  return <button onClick$={() => {
    gotBeerSignal.value = true;
  }}>Give a Beer to Misko</button>
});


export const Misko = component$(() => {
  return <div>
    <div>Hi I'm Misko Yayy</div>
    <Slot />
    <BeerSelector/>
  </div>;
})
