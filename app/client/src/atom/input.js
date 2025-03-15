import { mount, el } from '../../node_modules/redom/dist/redom.es';

export default class Input {
    constructor(settings = {}) {
        const {
            label = '',
            input_type = 'text',
        } = settings;

        this._prop = {
            label,
            input_type,
        }
        this.el = this._ui_render();
    }

    _ui_render = () => {
        const { label, input_type } = this._prop;
        return (
            <div>
                <label className="form-label">{label}
                    <input type={input_type} className="form-control" />
                </label>
            </div>
        )
    }
}
