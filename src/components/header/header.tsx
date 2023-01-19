import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo">
        
          <h3><a href="/">HEADER LOGO</a></h3>
        
      </div>
      <ul>
        <li>
          <a href="/page1" >
            Page 1
          </a>
        </li>
        <li>
          <a href="/page2">
            Page 2
          </a>
        </li>
      </ul>
    </header>
  );
});
