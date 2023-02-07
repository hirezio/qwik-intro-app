import { component$, useSignal } from '@builder.io/qwik';
import { Projector } from './projector';

export default component$(() => {

  const messageSignal = useSignal('');

  return <div>
    This is Page 1

    <hr />
    
    <input type="text" placeholder="Type your search"
      value={messageSignal.value}
      onInput$={(event: InputEvent) => {
        messageSignal.value = (event.target as HTMLInputElement).value;
      }}/>
    
    <hr />
    
    <Projector message={ messageSignal.value } />
  </div>
});