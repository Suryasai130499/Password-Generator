import { component$, useContext, useClientEffect$ } from '@builder.io/qwik';
import { StateInterface } from './interfaces';
import { myStateContext } from '~/routes';
import './strength.css';

const Strength = component$(() => {
  const value = ['Too weak!', 'weak', 'medium', 'strong'];
  const dataValue = ['tooWeak', 'weak', 'medium', 'strong'];

  const state = useContext<StateInterface>(myStateContext);

  useClientEffect$(({ track }) => {
    const checkedCount = track(() => state.checkedCount);
    state.strength = checkedCount + 1;
  });

  return (
    <div class="strength">
      <p class="text">Strength</p>
      <div class="value">
        <p class="strong">{value[state.strength - 1]}</p>
        <div class="boxes" data-scheme={dataValue[state.strength - 1]}>
          <div class="one"></div>
          <div class="two"></div>
          <div class="three"></div>
          <div class="four"></div>
        </div>
      </div>
    </div>
  );
});

export default Strength;
