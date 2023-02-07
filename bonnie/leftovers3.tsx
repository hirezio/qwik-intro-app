import type {
  Signal} from '@builder.io/qwik';
import {
  component$, createContext, Slot, useContext, useContextProvider,
  useSignal, useTask$
} from '@builder.io/qwik';

export const BeerContext = createContext<Signal<boolean>>('BeerContext');

export default component$(() => {

  const didHeGetABeerSignal = useSignal(false);
  useContextProvider(BeerContext, didHeGetABeerSignal);

  const isMiskoVisibleSignal = useSignal(false);
  
  useTask$(({track}) => {
    track(() => didHeGetABeerSignal.value);

    if (didHeGetABeerSignal.value) {
      isMiskoVisibleSignal.value = true;
    }
  })
  
  return (
    <>

      <BeerGiver  />

      {isMiskoVisibleSignal.value ?
        <Misko>I love Shai</Misko>
        : null}
    </>
  );
});


// ----------------------------

export const BeerGiver = component$(() => {
  return <div>
    <BeerGiverButton/>
    
  </div>;
})

// ----------------------------

export const BeerGiverButton = component$(() => {

  const didHeGetABeerSignal = useContext(BeerContext);

  return <button onClick$={() => {
    didHeGetABeerSignal.value = true;
    }}>Give a Beer to Misko</button>
    
  
})

// ----------------------------

export const Misko = component$(() => {
  return <div>
    <div>Hi I'm Misko Yayy</div>
    <Slot/>
  </div>;
})
