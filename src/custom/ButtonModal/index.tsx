import { useState } from 'react';
import { Button, Modal } from 'antd';
import styles from './ButtonModalComponent.module.scss';
import classnames from 'classnames/bind';
import { Typography } from 'antd';

const { Title } = Typography;

const cx = classnames.bind(styles);

interface IProps {
    content: any;
    type: 'button' | 'text';
    displayText: string;
    className?: string;
}

const ButtonModalComponent = (props: IProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            {props.type == 'button' ? (
                <Button type="primary" onClick={showModal}>
                    {props.displayText}
                </Button>
            ) : (
                <Title className={props.className} level={3} onClick={showModal}>
                    {props.displayText}
                </Title>
            )}
            <Modal
                className={cx('modal-component')}
                title="TopFIN"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                width=""
            >
                {props.content}
            </Modal>
        </>
    );
};

export default ButtonModalComponent;