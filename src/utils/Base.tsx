import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

class Base {
    bigPopup = (target: JSX.Element, content: JSX.Element) => {
        return (
            <Popup trigger={target} modal>
                {content}
            </Popup>
        );
    };

    confirmPopup = (
        target: JSX.Element,
        content: JSX.Element,
        btnTriggerName: string,
        btnCloseName: string,
        confirmAction: () => void
    ) => {
        return (
            <Popup trigger={target} modal>
                {content}
                <button
                    className="button"
                    onClick={() => {
                        confirmAction();
                    }}
                >
                    {btnTriggerName}
                </button>
                <button
                    className="button"
                    onClick={() => {
                        close();
                    }}
                >
                    {btnCloseName}
                </button>
            </Popup>
        );
    };
}

export default new Base();
