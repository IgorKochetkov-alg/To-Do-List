import { mount, el } from '../node_modules/redom/dist/redom.es';
import LoginFrom from './widget/loginFrom'

const lang = 'ru'; // 'ru', 'en'

mount(
    document.getElementById('main'),
    <LoginFrom />
);