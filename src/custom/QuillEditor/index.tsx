import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import CustomInputComponent from '../CustomInput';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Typography, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import styles from './QuillEditor.module.scss';
import classnames from 'classnames/bind';
import ImageUploadComponent from '../ImageUpload';

const cx = classnames.bind(styles);

const items: MenuProps['items'] = [
    {
        key: '1',
        label: 'Phân tích cơ bản'
    },
    {
        key: '2',
        label: 'Phân tích kỹ thuật'
    },
    {
        key: '3',
        label: 'Cho người mới bắt đầu'
    }
];

interface IProps {
    onEdit: (e, type) => void;
    dataSend: any;
}

const QuillEditorComponent = (props: IProps) => {
    const modules = {
        toolbar: [
            [{ header: '1' }, { header: '2' }, { font: [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
            ['link', 'image', 'video'],
            ['clean']
        ],
        clipboard: {
            // toggle to add extra line breaks when pasting HTML:
            matchVisual: false
        }
    };

    const formats = [
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'video'
    ];

    const [itemSelected, selectItem] = useState('Phân tích cơ bản');

    return (
        <div>
            <Dropdown
                menu={{
                    items,
                    selectable: true,
                    defaultSelectedKeys: ['1'],
                    onSelect: (e) => {
                        selectItem(
                            e.key == '1'
                                ? 'Phân tích cơ bản'
                                : e.key == '2'
                                ? 'Phân tích kỹ thuật'
                                : 'Cho người mới bắt đầu'
                        );
                        props.onEdit(e, 4);
                    }
                }}
            >
                <Typography.Link>
                    <Space>
                        {itemSelected}
                        <DownOutlined />
                    </Space>
                </Typography.Link>
            </Dropdown>
            <CustomInputComponent
                type="text"
                name="Tiêu đề"
                require={true}
                onChange={(e) => props.onEdit(e, 1)}
                placeholder="Nhập tiêu đề"
            />
            <ImageUploadComponent onEdit={props.onEdit} />
            <CustomInputComponent
                type="text"
                name="Hashtag"
                require={true}
                onChange={(e) => props.onEdit(e, 2)}
                placeholder="Chỉ nhận 1 hashtag"
            />
            <CustomInputComponent
                type="text"
                name="Mô tả bài viết"
                require={true}
                onChange={(e) => props.onEdit(e, 3)}
                placeholder="Mô tả bài viết"
            />
            <ReactQuill
                theme={'snow'}
                onChange={(e) => props.onEdit(e, 5)}
                value={props.dataSend.content}
                modules={modules}
                formats={formats}
                bounds={'.app'}
                placeholder={'Nhập nội dung'}
            />
            <div>
                <span className={cx('note')}> * Các trường bắt buộc</span>
            </div>
        </div>
    );
};

export default QuillEditorComponent;
