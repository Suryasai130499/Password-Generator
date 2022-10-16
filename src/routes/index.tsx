import {
  component$,
  createContext,
  useContextProvider,
  useStore,
} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { StateInterface } from '~/components/interfaces';
import './index.css';
import Button from '~/components/interactive-components/ button';
import Checkbox from '~/components/interactive-components/checkbox';
import Range from '~/components/interactive-components/range';
import Strength from '~/components/strength';
import TextField from '~/components/textField';

export const myStateContext = createContext<StateInterface>('MyContext');

export default component$(() => {
  const state = useStore({
    checkedCount: 0,
    strength: 1,
    characterCount: 20,
    upper: true,
    lower: false,
    numbers: false,
    symbols: false,
    password: '',
  });

  useContextProvider(myStateContext, state);

  return (
    <>
      <div className="index__wrapper">
        <TextField />
        <div className="selectDiv">
          <Range />
          <Checkbox dataUsed="upper" text="Include Uppercase Letters" />
          <Checkbox dataUsed="lower" text="Include Lowercase Letters" />
          <Checkbox dataUsed="numbers" text="Include Numbers" />
          <Checkbox dataUsed="symbols" text="Include Symbols" />
          <Strength />
          {/* <Button text="Generate" /> */}
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Password Generator',
};
