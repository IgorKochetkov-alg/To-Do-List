import { mount, el } from '../../node_modules/redom/dist/redom.es';
import LoginAndPassForm from '../widget/loginAndPassForm';
import Button from '../atom/button';
import Link from '../atom/link';
import t9n from '../utils/t9n/index';
import { commonEventManager } from '../utils/eventManager';
import app_fetch from '../fetch/app';


export default class LoginForm {
    constructor(settings = {}) {
        const {
            langId = 'ru',
        } = settings;

        this._prop = {
            langId,
        };

        this.el = this._ui_render();

        commonEventManager.subscribe('changeLang', this._eventChangeLogLang)
    }

    _onBtnClick = () => {
        const { langId } = this._prop;
        const newLangId = langId === 'ru' ? 'en' : 'ru';
        commonEventManager.dispatch('changeLang', newLangId);
        this._prop.langId = newLangId;
    }

    _eventChangeLogLang = (lang) => {
        this._el_to_registration.updateLabel(t9n(lang, 'TO_REGISTRATION'));
        this._el_sign_in.updateLabel(t9n(lang, 'TO_SIGN_IN'));
        this._el_change_lang.updateLabel(t9n(lang, 'CHANGE_LANG'));
    }

    _ui_render = () => {
        const { langId } = this._prop;
        return (
            <div className='d-flex flex-column'>
                <LoginAndPassForm this='_el_form_login' langId={langId} />
                <Link this='_el_to_registration' label={t9n(langId, 'TO_REGISTRATION')} link='registration.html'/>
                <Button this='_el_sign_in' title={t9n(langId, 'TO_SIGN_IN')} className='btn btn-primary' onClick={this._onBtnClickLogin}/>
                <Button this='_el_change_lang' title={t9n(langId, 'CHANGE_LANG')} className='btn btn-secondary' onClick={this._onBtnClick} />
            </div>
        )
    }

    _onBtnClickLogin = () => {
        const email = this._el_form_login.getEmail();
        console.log(email);
        const password = this._el_form_login.getPassword();
        console.log(app_fetch('api/v1/login', {email, password}));
    }
}
