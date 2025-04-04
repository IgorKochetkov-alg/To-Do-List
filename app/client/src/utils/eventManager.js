class EventManager {
    _eventList = {};

    // {
    //     'event1': [
    //         f1,
    //         f2
    //     ],
    //     'event2': [
    //         f3
    //     ]
    // }

    subscribe = (name, listener) => {
        if (typeof this._eventList[name] === 'undefined') {
            this._eventList[name] = [];
        }
        this._eventList[name].push(listener);
    }

    dispatch = (name, args = {}) => {
        if (this._eventList.hasOwnProperty(name)) {
            this._eventList[name].forEach((listener) => {
                listener(args);
            });
        }
    }
}

export let commonEventManager = new EventManager(); // singleton
export { EventManager }; // class