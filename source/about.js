import hello_word from './hello.js';
import world_word from './world.js';
import css from './styles.css';
document.querySelector('#root').innerHTML = world_word + ' ' + hello_word;
console.log('css', css);
