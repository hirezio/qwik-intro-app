import { component$, $, useSignal, useTask$ } from '@builder.io/qwik';
import { Projector } from './projector';

export default component$(() => {

  const messageSignal = useSignal('');
  const colorSignal = useSignal('black');

  useTask$(({ track }) => {
    track(() => messageSignal.value);

    
    if (messageSignal.value.indexOf('llama') !== -1) {
      colorSignal.value = 'red';
    } else {
      colorSignal.value = 'black';
    }
    
  });
  
  const clear$ = $(() => {
    messageSignal.value = '';
  });

  return <div>
    This is Page 1

    <hr />
    
    <input type="text" placeholder="Type your search"
      value={messageSignal.value}
      onInput$={(event: InputEvent) => {
        messageSignal.value = (event.target as HTMLInputElement).value;
      }}/>
    
    <hr />
    
    <Projector message={messageSignal.value}
      color={colorSignal.value} clear$={clear$} />
  </div>
});