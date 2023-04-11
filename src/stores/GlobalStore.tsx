import { action, makeObservable, observable } from 'mobx';
import { Article } from '../services/data/dataService';

// interface
interface IToast {
    message: string;
    type: 'error' | 'warning' | 'info' | 'success';
    open: boolean;
}

interface IConfirm {
    title: string;
    message: string;
    callback?: () => void;
    open: boolean;
}

interface IForm {
    form: JSX.Element;
    title?: string;
    note?: string;
    callback?: () => void;
    open: boolean;
}

interface INews {
    reload: boolean;
    data: any;
}

// class, where stores all global states
class GlobalStore {
    // global state
    windowDimension: any;

    isPopupOpen: boolean = false;

    isLoading: boolean = false;

    toastInfo: IToast = {
        message: 'Default',
        type: 'error',
        open: false
    };

    confirmInfo: IConfirm = {
        title: 'Default title',
        message: 'Default',
        open: false
    };

    formInfo: IForm = {
        form: <></>,
        title: 'Mặc định',
        note: 'Không có lưu ý',
        open: false
    };

    news: INews = {
        reload: false,
        data: null
    };

    constructor() {
        makeObservable(this, {
            windowDimension: observable,
            isPopupOpen: observable,
            isLoading: observable,
            toastInfo: observable,
            confirmInfo: observable,
            formInfo: observable,
            news: observable,

            setWindowDimensions: action,
            setOpenPopup: action,
            openToast: action,
            closeToast: action,
            openConfirm: action,
            closeConfirm: action,
            openForm: action,
            closeForm: action,
            loadNews: action
        });
    }

    // action
    setWindowDimensions = (windowDimension) => {
        this.windowDimension = windowDimension;
    };

    setOpenPopup = (isOpen) => {
        this.isPopupOpen = isOpen;
    };

    setLoading = (isLoading) => {
        this.isLoading = isLoading;
    };

    openToast = (toastInfo?: IToast) => {
        if (toastInfo) this.toastInfo = toastInfo;
        this.toastInfo.open = true;
    };

    closeToast = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        this.toastInfo.open = false;
    };

    openConfirm = (confirmInfo?: IConfirm) => {
        if (confirmInfo) this.confirmInfo = confirmInfo;
        this.confirmInfo.open = true;
    };

    closeConfirm = (onlyClose?: boolean) => {
        if (this.confirmInfo.callback && !onlyClose) this.confirmInfo.callback();
        this.confirmInfo.open = false;
    };

    openForm = (formInfo?: IForm) => {
        if (formInfo) {
            this.formInfo = formInfo;
            if (!this.formInfo.title) this.formInfo.title = 'Mặc định';
            if (!this.formInfo.note) this.formInfo.note = 'Không có lưu ý';
        }
        this.formInfo.open = true;
    };

    closeForm = (onlyClose?: boolean) => {
        if (this.formInfo.callback && !onlyClose) this.formInfo.callback();
        this.formInfo.open = false;
    };

    loadNews = () => {
        this.setLoading(true);
        let sv = new Article();
        sv.getAll().then((d) => {
            this.setLoading(false);
            this.news = { data: d, reload: !this.news.reload };
        });
    };
}

export default new GlobalStore();
