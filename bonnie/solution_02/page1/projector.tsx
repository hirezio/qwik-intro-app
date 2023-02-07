import { component$ } from '@builder.io/qwik'

interface ProjectorProps{
  message: string;
  color: string;
}

export const Projector = component$(({message, color='black'}: ProjectorProps) => {
  return <div>
    You typed: <span style={`color: ${color}`}>{message}</span>
  </div>
})