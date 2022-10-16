import { component$ } from '@builder.io/qwik';
import './button.css';

interface ButtonProps {
  text: string;
}

const Button = component$((props: ButtonProps) => {
  return (
    <>
      <button class="generate">{props.text}</button>
    </>
  );
});

export default Button;
