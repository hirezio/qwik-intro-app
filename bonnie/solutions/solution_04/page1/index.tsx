import { component$, $, useSignal, useTask$, useResource$, Resource } from '@builder.io/qwik';
import { Projector } from './projector';

export default component$(() => {

  const messageSignal = useSignal('');
  const colorSignal = useSignal('black');

  const usersResource = useResource$<any[]>(async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users/');
    return result.json();
  });

  useTask$(async ({ track }) => {
    track(() => messageSignal.value);

    const users = await usersResource.value;
    
    const found = users.find((user) => {
      return user.name.toLowerCase().indexOf(messageSignal.value) !== -1;
    })
    
    
    if (found) {
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
    
    <h3>Users:</h3>
    <Resource value={usersResource}
      onResolved={(users) => <ul>{users.map((user) => <li>{user.name}</li>)}</ul>}
      onPending={()=> <div>loading...</div>}
      onRejected={(reason) => <div>On no! Error: { reason }</div>}
    />
  </div>
});