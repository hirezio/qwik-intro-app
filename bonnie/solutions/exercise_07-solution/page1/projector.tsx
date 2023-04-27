import { component$, useContext } from '@builder.io/qwik'
import { searchContextId } from './search-context-id';

interface ProjectorProps{
  message: string;
  color: string;
}

export const Projector = component$(() => {

  const {messageSignal, colorSignal} = useContext(searchContextId);

  return <div>You typed:
    <span style={`color: ${messageSignal.value}`}>{messageSignal.value}</span>
  </div>
})