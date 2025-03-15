import { mount, el } from '../../node_modules/redom/dist/redom.es';
import Button from '../atom/button';
import Input from '../atom/input';
import Link from '../atom/link';
import LoginAndPassFrom from '../widget/loginAndPassFrom';

export default class RegFrom {
    constructor() {
        this.el = this._ui_render();
    }

    _ui_render = () => {
        return (
            <div className='d-flex flex-column'>
                <Input label='Username' />
                <LoginAndPassFrom />
                <Input label='Repeat password' input_type='password' />
                <Link label='sign in' link='login.html'/>
                <Button input='Sign up' cl_name = 'btn btn-success'/>
            </div>
        )
    }
}
