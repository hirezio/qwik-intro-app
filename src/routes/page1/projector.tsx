import { component$, useContext } from '@builder.io/qwik';
import { searchContextId } from './search-context-id';



export const Projector = component$(() => {

  const { messageSignal, colorSignal } = useContext(searchContextId);

  return <div>You typed: 
    <span style={'color:' + colorSignal.value}> {messageSignal.value}</span>
  </div>;
})