import { component$, useSignal } from '@builder.io/qwik';

export default component$(() => {

  const searchInputSignal = useSignal('');

  return <div>
    This is Page 1

    <hr />
    
    <input type="text" placeholder="Type your search"
      value={searchInputSignal.value}
      onInput$={(event: InputEvent) => { searchInputSignal.value = (event.target as HTMLInputElement).value }} />
    
    <hr />
    
    <div>You typed: { searchInputSignal.value}</div>
  </div>
});