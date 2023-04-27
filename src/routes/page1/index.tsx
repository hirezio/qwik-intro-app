import { component$ } from '@builder.io/qwik';

export default component$(() => {

  

  return <div>
    This is Page 1

    <hr />
    
    <input type="text" placeholder="Type your search"/>
    
    <hr />
    
    <div>You typed: </div>
  </div>
});