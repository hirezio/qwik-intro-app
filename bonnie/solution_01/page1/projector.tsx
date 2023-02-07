import { component$ } from '@builder.io/qwik'

interface ProjectorProps{
  message: string;
}

export const Projector = component$((props: ProjectorProps) => {
  return <div>
    You typed: {props.message}
  </div>
})