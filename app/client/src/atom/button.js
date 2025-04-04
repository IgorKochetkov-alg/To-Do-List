import { mount, el } from '../../node_modules/redom/dist/redom.es';
import { clsx } from '../../node_modules/clsx/dist/clsx.mjs';

export default class Button {
    constructor(settings = {}) {
        const {
            title = '',
            icon = null,
            // type = 'primary', // 'primary', 'secondary'
            className = 'btn',
            onClick = () => { },
        } = settings;

        this._prop = {
            title,
            icon,
            className,
        };

        this._callback = {
            onClick,
        }

        this.el = this._ui_render();
    }

    _onClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const { onClick } = this._callback;
        onClick && onClick();
    }

    _ui_icon = (icon) => {
        return icon ? <i className={clsx('bi', `bi-${icon}`)}></i> : null;
    }

    _ui_render = () => {
        const { title, icon, type, className } = this._prop;

        return (
            <button this='_ui_button' className={`btn btn-${type} ${className}`} onclick={this._onClick}>
                {this._ui_icon(icon)}
                <span this='_ui_span'>{title}</span>
            </button>
        );
    }

    updateLabel = (label) => {
        if (typeof label === 'string') {
            this._ui_span.innerText = label;
        } else {
            this._ui_span = mount(this.el, label, this._ui_span, true);
        }
    }
}
