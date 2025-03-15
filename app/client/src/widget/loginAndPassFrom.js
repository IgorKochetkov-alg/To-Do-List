import { mount, el } from '../../node_modules/redom/dist/redom.es';
import Input from '../atom/input';

export default class LoginAndPassFrom {
    constructor() {
        this.el = this._ui_render();
    }

    _ui_render = () => {
        return (
            <div className='d-flex flex-column'>
                <Input label='Login' />
                <Input label='Password' input_type='password' />
            </div>
        )
    }
}
