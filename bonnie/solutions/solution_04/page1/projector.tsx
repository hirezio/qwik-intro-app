import { component$, PropFunction } from '@builder.io/qwik'

interface ProjectorProps{
  message: string;
  color: string;
  clear$?: PropFunction<()=>void>
}

export const Projector = component$(({message, color='black', clear$}: ProjectorProps) => {
  return <div>
    <div> You typed: <span style={`color: ${color}`}>{message}</span></div>
    <div><button onClick$={()=>{ clear$ && clear$(); }}>Clear</button></div>
  </div>
})