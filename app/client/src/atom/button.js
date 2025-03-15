import { mount, el } from '../../node_modules/redom/dist/redom.es';

export default class Button {
    constructor(settings = {}) {
        const {
            input = '',
            cl_name = 'btn btn-danger',
        } = settings;

        this._prop = {
            input,
            cl_name,
        }
        this.el = this._ui_render();
    }

    _ui_render = () => {
        const { input, cl_name } = this._prop;
        return (
            <div>
                <button className={cl_name} name="button">{input}</button>
            </div>
        )
    }
}
