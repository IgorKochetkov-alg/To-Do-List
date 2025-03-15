import { mount, el } from '../node_modules/redom/dist/redom.es';
import RegFrom from './widget/regFrom'

mount(
    document.getElementById('main'),
    <RegFrom />
);