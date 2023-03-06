import type { Signal } from '@builder.io/qwik';
import { createContext } from '@builder.io/qwik';

export interface SearchContextState{
  messageSignal: Signal<string>;
  colorSignal: Signal<string>;
}
export const searchContextId = createContext<SearchContextState>('searchContext');