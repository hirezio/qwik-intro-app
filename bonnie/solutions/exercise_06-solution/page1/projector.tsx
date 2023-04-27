import { component$ } from '@builder.io/qwik'

interface ProjectorProps{
  message: string;
  color: string;
}

export const Projector = component$((props: ProjectorProps) => {
  return <div>
    You typed: <span style={`color: ${props.color}`}>{props.message}</span>
  </div>
})