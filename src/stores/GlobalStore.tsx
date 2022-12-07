import { action, makeObservable, observable } from 'mobx';

class GlobalStore {
    windowDimension: any;

    isPopupOpen: boolean = false;

    constructor() {
        makeObservable(this, {
            windowDimension: observable,
            isPopupOpen: observable,
            setWindowDimensions: action,
            setOpenPopup: action
        });
    }

    setWindowDimensions = (windowDimension) => {
        this.windowDimension = windowDimension;
    };

    setOpenPopup = (isOpen) => {
        this.isPopupOpen = isOpen;
    };
}

export default new GlobalStore();
