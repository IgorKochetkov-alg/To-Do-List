import { mount, el } from '../../node_modules/redom/dist/redom.es';
import Button from '../atom/button';
import Input from '../atom/input';
import Link from '../atom/link';

export default class EditorForm {
    constructor() {
        this.el = this._ui_render();
    }

    _ui_render = () => {
        return (
            <div className='d-flex flex-column'>
                <Input label='Username' />
            </div>
        )
    }
}
