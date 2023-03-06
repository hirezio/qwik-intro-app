import type { Signal } from '@builder.io/qwik';
import { createContext } from '@builder.io/qwik';

export const beerContextId = createContext<Signal<boolean>>('beerContext');