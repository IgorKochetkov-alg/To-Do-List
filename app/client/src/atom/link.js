import { mount, el } from '../../node_modules/redom/dist/redom.es';

export default class Link {
    constructor(settings = {}) {
        const {
            label = '',
            link = '',
        } = settings;

        this._prop = {
            label,
            link,
        }
        this.el = this._ui_render();
    }

    updateLabel = (label) => {
        if (typeof label === 'string') {
            this._el_label.innerText = label;
        } else {
            this._el_label = mount(this.el, label, this._el_label, true);
        }

    }

    _ui_render = () => {
        const { label, link } = this._prop;
        return (
            <div>
                <a this='_ui_a' href={link}> {label}</a>
            </div>
        )
    }

    updateLabel = (label) => {
        if (typeof label === 'string') {
            this._ui_a.innerText = label;
        } else {
            this._ui_a = mount(this.el, label, this._ui_a, true);
        }

    }
}