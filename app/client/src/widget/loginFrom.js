import { mount, el } from '../../node_modules/redom/dist/redom.es';
import LoginAndPassFrom from '../widget/loginAndPassFrom';
import Button from '../atom/button';
import Link from '../atom/link';

export default class LoginFrom {
    constructor() {
        this.el = this._ui_render();
    }

    _ui_render = () => {
        return (
            <div className='d-flex flex-column'>
                <LoginAndPassFrom />
                <Link label='sign up' link='registration.html'/>
                <Button input='Sign in' cl_name = 'btn btn-primary'/>
            </div>
        )
    }
}
