import { action, makeObservable, observable } from 'mobx';

class GlobalStore {
    windowDimension: any;

    constructor() {
        makeObservable(this, {
            windowDimension: observable,
            setWindowDimensions: action
        });
    }

    setWindowDimensions = (windowDimension) => {
        this.windowDimension = windowDimension;
    };
}

export default new GlobalStore();
