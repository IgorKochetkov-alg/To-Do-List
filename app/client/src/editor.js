import { mount, el } from '../node_modules/redom/dist/redom.es';
import EditorForm from './widget/editorForm'

const lang = 'ru'; // 'ru', 'en'

mount(
    document.getElementById('main'),
    <EditorForm />
);