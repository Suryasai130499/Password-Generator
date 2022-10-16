import { v4 as uuidv4 } from 'uuid';
import { component$, useContext, useSignal, $ } from '@builder.io/qwik';
import { StateInterface } from '../interfaces';
import { myStateContext } from '~/routes';
import './checkbox.css';

const Checkbox = component$((props: { text: string; dataUsed: string }) => {
  const checkboxID = uuidv4();
  const checkBoxRef = useSignal<HTMLInputElement>();

  const state = useContext<StateInterface>(myStateContext);

  const handleClick = $(() => {
    if (checkBoxRef.untrackedValue.checked) {
      if (props.dataUsed === 'upper') {
        state.upper = true;
      }
      if (props.dataUsed === 'lower') {
        state.lower = true;
      }
      if (props.dataUsed === 'numbers') {
        state.numbers = true;
      }
      if (props.dataUsed === 'symbols') {
        state.symbols = true;
      }
      state.checkedCount++;
    } else {
      if (props.dataUsed === 'upper') {
        state.upper = false;
      }
      if (props.dataUsed === 'lower') {
        state.lower = false;
      }
      if (props.dataUsed === 'numbers') {
        state.numbers = false;
      }
      if (props.dataUsed === 'symbols') {
        state.symbols = false;
      }
      state.checkedCount--;
    }
  });

  return (
    <div>
      <input
        checked={state[props.dataUsed] === true}
        ref={checkBoxRef}
        onClick$={handleClick}
        class="styled-checkbox"
        id={checkboxID}
        type="checkbox"
      />
      <label for={checkboxID}>{props.text}</label>
    </div>
  );
});

export default Checkbox;
