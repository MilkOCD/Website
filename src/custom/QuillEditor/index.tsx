import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import CustomInputComponent from '../CustomInput';
import { Article } from 'src/services/data/dataService';

const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ab], { type: mimeString });
    return blob;
};

const replaceImageUrls = async (html) => {
    let sv = new Article();

    const regex = /"data:image\/([a-zA-Z]*);base64,([^"]*)"/g;
    const matches = html.match(regex);
    const promises = [];
    let replacedHtml = html;
    for (const match of matches) {
        let base64String = match.substring(1, match.length - 1);

        const byteCharacters = atob(base64String.split(',')[1]);

        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        const file = new File([byteArray], 'image.jpg', { type: 'image/jpeg' });

        const formData = new FormData();
        formData.append('file', file);
        const promise = sv.uploadImage(formData).then((d) => {
            return { base64String, url: d };
        });
        promises.push(promise);
    }

    const uploadedFiles = await Promise.all(promises);
    let newHtml = replacedHtml;
    for (const uploadedFile of uploadedFiles) {
        const { base64String, url } = uploadedFile;
        newHtml = newHtml.replace(base64String, url);
    }
    console.log(newHtml);
    return newHtml;
};

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
    };

    const onChange = (e) => {};

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
            <button onClick={() => replaceImageUrls(editorHtml)}>Thử nghiệm</button>
        </div>
    );
};

export default QuillEditorComponent;
