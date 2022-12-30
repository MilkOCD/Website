import * as React from 'react';
import classnames from 'classnames';
import { Modal as _Modal } from 'antd';
export interface IProps {
    className?: string;
    wrapClassName?: string;
    style?: React.CSSProperties;
    title?: React.ReactNode;
    onClose?: () => void;
    visible?: boolean;
    centered?: boolean;
    destroyOnClose?: boolean;
    maskClosable?: boolean;
    closable?: boolean;
    zIndex?: number;
}
class CustomModal extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <>
                <_Modal
                    centered={this.props.centered}
                    wrapClassName={this.props.wrapClassName}
                    title={this.props.title}
                    visible={this.props.visible}
                    onCancel={this.props.onClose}
                    className={classnames({ 'ant-modal-cus': true }, this.props.className)}
                    style={this.props.style}
                    transitionName="fade"
                    maskTransitionName="fade"
                    destroyOnClose={this.props.destroyOnClose}
                    maskClosable={this.props.maskClosable}
                    closable={this.props.closable}
                    zIndex={this.props.zIndex}
                >
                    {this.props.children}
                </_Modal>
            </>
        );
    }
}
export default CustomModal;
