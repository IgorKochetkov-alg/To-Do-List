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

    _ui_render = () => {
        const { label, link } = this._prop;
        return (
            <div>
                <a href={link}> {label}</a>
            </div>
        )
    }
}