import { component$, useContext, useSignal, $ } from '@builder.io/qwik';
import { StateInterface } from '../interfaces';
import { myStateContext } from '~/routes';
import './range.css';

const Range = component$(() => {
  const rangeRef = useSignal<HTMLInputElement>();

  const state = useContext<StateInterface>(myStateContext);

  const changeSlider = $(() => {
    state.characterCount = rangeRef.untrackedValue.value;
  });

  return (
    <div class="range__wrapper">
      <div class="characters">
        <p class="text">Character Length</p>
        <p class="number">{state.characterCount}</p>
      </div>
      <input
        ref={rangeRef}
        type="range"
        min="1"
        max="30"
        value={state.characterCount}
        class="slider"
        id="myRange"
        onInput$={changeSlider}
      />
    </div>
  );
});

export default Range;
