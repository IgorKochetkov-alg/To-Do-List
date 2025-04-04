import { mount, el } from '../../node_modules/redom/dist/redom.es';
import Input from '../atom/input';
import Link from '../atom/link';
import Button from '../atom/button';
import LoginAndPassForm from '../widget/loginAndPassForm';
import t9n from '../utils/t9n/index';
import { commonEventManager } from '../utils/eventManager';


export default class RegForm {
    constructor(settings = {}) {
        const {
            langId = 'ru',
        } = settings;

        this._prop = {
            langId,
        };

        this.el = this._ui_render();

        commonEventManager.subscribe('changeLang', this._eventChangeRegLang)
    }

    _onBtnClick = () => {
        const { langId } = this._prop;
        const newLangId = langId === 'ru' ? 'en' : 'ru';
        commonEventManager.dispatch('changeLang', newLangId);
        this._prop.langId = newLangId;
    }

    _eventChangeRegLang = (lang) => {
        this._el_username.updateLabel(t9n(lang, 'USERNAME'));
        this._el_repeat_password.updateLabel(t9n(lang, 'REPEAT_PASSWORD'));
        this._el_to_login.updateLabel(t9n(lang, 'TO_LOGIN'));
        this._el_sign_up.updateLabel(t9n(lang, 'TO_SIGN_UP'));
        this._el_change_lang.updateLabel(t9n(lang, 'CHANGE_LANG'));
    }

    _ui_render = () => {
        const { langId } = this._prop;
        return (
            <div className='d-flex flex-column'>
                <Input this='_el_username' label={t9n(langId, 'USERNAME')} />
                <LoginAndPassForm langId={langId} />
                <Input this='_el_repeat_password' label={t9n(langId, 'REPEAT_PASSWORD')} />
                <Link this='_el_to_login' label={t9n(langId, 'TO_LOGIN')} link='login.html'/>
                <Button this='_el_sign_up' title={t9n(langId, 'TO_SIGN_UP')} className='btn btn-success' />
                <Button this='_el_change_lang' title={t9n(langId, 'CHANGE_LANG')} className='btn btn-secondary' onClick={this._onBtnClick} />
            </div>
        )
    }
}
