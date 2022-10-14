import { component$, useSignal } from '@builder.io/qwik';

export interface IndexProps {
  count: number;
}

export const Index = component$<IndexProps>((props) => {
  const count = useSignal(0);
  return <div onClick$={(ev) => {}}></div>;
});
