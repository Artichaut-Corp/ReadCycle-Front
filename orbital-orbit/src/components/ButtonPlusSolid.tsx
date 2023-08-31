import { createSignal } from 'solid-js';

export default function BoutonPlusSolid() {
  const [count, setCount] = createSignal(0);
  const add = () => setCount(count() + 1);

  return (
      <>
        <button class="btn btn-primary" onClick={add}>Ce bouton a été cliqué {count()} fois</button>
      </>
    );
  }
