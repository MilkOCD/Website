import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import CustomInputComponent from '../CustomInput';

const QuillEditorComponent = () => {
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

    const [editorHtml, setEditorHtml] = useState('');

    const handleChange = (html) => {
        setEditorHtml(html);
        console.log(html);
    };

    const onChange = (e) => {
        console.log(e.target.value);
    };

    return (
        <div>
            <CustomInputComponent type="text" name="Lêm" require={true} onChange={onChange} />
            <ReactQuill
                theme={'snow'}
                onChange={handleChange}
                value={editorHtml}
                modules={modules}
                formats={formats}
                bounds={'.app'}
                placeholder={'Nhập nội dung'}
            />
        </div>
    );
};

export default QuillEditorComponent;
