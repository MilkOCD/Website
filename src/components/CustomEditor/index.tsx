import React, { useRef, useState } from 'react';
import { Editor, EditorState, RichUtils, AtomicBlockUtils, convertToRaw, CompositeDecorator, Modifier } from 'draft-js';
import './CustomEditor.css';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import classnames from 'classnames';

import {
    Box,
    styled,
    Stack,
    Chip,
    Tooltip,
    IconButton,
    Button,
    useTheme,
    InputAdornment,
    TextField
} from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AttachFileTwoToneIcon from '@mui/icons-material/AttachFileTwoTone';
import ComputerIcon from '@mui/icons-material/Computer';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import { Article } from '../../services/data/dataService';
import gStore from 'src/stores/GlobalStore';
import draftToHtml from 'draftjs-to-html';

const Input = styled('input')({
    display: 'none'
});

const Link = ({ entityKey, contentState, children }) => {
    let { url } = contentState.getEntity(entityKey).getData();
    return (
        <a style={{ color: 'blue', fontStyle: 'italic' }} href={url} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    );
};

const findLinkEntities = (contentBlock, callback, contentState) => {
    contentBlock.findEntityRanges((character) => {
        const entityKey = character.getEntity();
        return entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK';
    }, callback);
};

export const createLinkDecorator = () =>
    new CompositeDecorator([
        {
            strategy: findLinkEntities,
            component: Link
        }
    ]);

// call all together
export const onAddLink = (editorState, setEditorState) => {
    let linkUrl = window.prompt('Add link http:// ');
    const decorator = createLinkDecorator();
    if (linkUrl) {
        let displayLink = window.prompt('Display Text');
        if (displayLink) {
            const currentContent = editorState.getCurrentContent();
            const createEntity = currentContent.createEntity('LINK', 'MUTABLE', {
                url: linkUrl
            });
            let entityKey = currentContent.getLastCreatedEntityKey();
            const selection = editorState.getSelection();
            const textWithEntity = Modifier.insertText(currentContent, selection, displayLink, null, entityKey);
            let newState = EditorState.createWithContent(textWithEntity, decorator);
            setEditorState(newState);
        }
    }
};

const customStyleMap = {
    'COLOR-red': {
        color: 'rgba(255, 0, 0, 1.0)'
    },
    'COLOR-orange': {
        color: 'rgba(255, 127, 0, 1.0)'
    },
    'COLOR-yellow': {
        color: 'rgba(180, 180, 0, 1.0)'
    },
    'COLOR-green': {
        color: 'rgba(0, 180, 0, 1.0)'
    },
    'COLOR-blue': {
        color: 'rgba(0, 0, 255, 1.0)'
    },
    'COLOR-indigo': {
        color: 'rgba(75, 0, 130, 1.0)'
    },
    'COLOR-violet': {
        color: 'rgba(127, 0, 255, 1.0)'
    }
};

function CustomEditor() {
    const theme = useTheme();
    const editorRef = useRef(null);
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
    const [tags, setTags] = React.useState([]);
    const [title, setTitle] = React.useState('Nhập tiêu đề ...');
    const [description, setDescription] = React.useState('');

    const tagsHandler = (value) => {
        let newTag = value.target.value;
        let isValidTag = newTag != '' && !tags.find((d) => d == newTag);
        if (isValidTag) {
            setTags([...tags, value.target.value]);
        }
    };

    const focus = () => {
        editorRef.current.focus();
    };

    const onBoldClick = (e) => {
        e.preventDefault(); // Dùng preventDefault() để giữ con trỏ chuột vẫn còn ở trong editor nhé các bạn
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
    };

    const onItalicClick = (e) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
    };

    const onUnderlineClick = (e) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
    };

    const toggleColor = (e) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'COLOR-' + 'red')); // color là giá trị màu sắc, ví dụ: 'red'));
    };

    function mediaBlockRenderer(block) {
        if (block.getType() === 'atomic') {
            return {
                component: Image,
                editable: false
            };
        }

        return null;
    }

    const addImage = (e, imgUrl) => {
        e.preventDefault();
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity('image', 'IMMUTABLE', { src: imgUrl });
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });
        setEditorState(AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' '));
    };

    const Image = ({ contentState, block }) => {
        const entity = contentState.getEntity(block.getEntityAt(0));
        const { src } = entity.getData();
        return <img src={src} />;
    };

    const resetDataSend = () => {
        setTags([]);
        setTitle('');
        setDescription('');
    };

    const convertContentToHTML = () => {
        const rawContentState = convertToRaw(editorState.getCurrentContent());
        return draftToHtml(rawContentState);
    };

    const onAction = () => {
        if (title != '') {
            let sv = new Article();
            let data = {
                title: title,
                description: convertContentToHTML(),
                hashTag: tags.join(', ')
            };
            sv.create(data).then((d) => {
                gStore.loadNews();
                resetDataSend();
                gStore.openToast({
                    message: 'Tạo bài viết thành công',
                    type: 'success',
                    open: true
                });
            });
        } else {
            gStore.openToast({
                message: 'Tiêu đề không được để trống',
                type: 'error',
                open: true
            });
        }
    };

    return (
        <>
            <div className="tags-container ml-px">
                <div>
                    <Box sx={{ m: 0, mb: 1 }}>
                        <Stack direction="row" spacing={1}>
                            {tags.length > 0 ? (
                                tags.map((tag, index) => <Chip key={index} color="primary" label={`#${tag}`} />)
                            ) : (
                                <></>
                            )}
                        </Stack>
                    </Box>
                    <TextField
                        className="editor-tags"
                        id="input-with-icon-textfield"
                        label="Gắn thẻ bài viết"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LocalOfferIcon fontSize="small" />
                                </InputAdornment>
                            )
                        }}
                        onBlur={tagsHandler}
                        variant="standard"
                    />
                </div>
                <div>
                    <TextField
                        sx={{ mt: 1 }}
                        required
                        className="editor-header"
                        id="input-with-icon-textfield"
                        label="Nhập tiêu đề ..."
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <ComputerIcon fontSize="small" />
                                </InputAdornment>
                            )
                        }}
                        variant="standard"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
            </div>
            <div className="custom-editor" onClick={focus}>
                <div>
                    <Tooltip title="In đậm">
                        <span onMouseDown={onBoldClick}>
                            <FormatBoldIcon className={classnames('ico-editor')} />
                        </span>
                    </Tooltip>
                    <Tooltip title="Chữ nghiêng">
                        <span onMouseDown={onItalicClick}>
                            <FormatItalicIcon className={classnames('ico-editor')} />
                        </span>
                    </Tooltip>
                    <Tooltip title="Gạch dưới">
                        <span onMouseDown={onUnderlineClick}>
                            <FormatUnderlinedIcon className={classnames('ico-editor')} />
                        </span>
                    </Tooltip>
                    <Tooltip title="Màu chữ">
                        <span onMouseDown={toggleColor}>
                            <FormatColorTextIcon className={classnames('ico-editor')} />
                        </span>
                    </Tooltip>
                    <Tooltip title="Chèn link">
                        <span onMouseDown={() => onAddLink(editorState, setEditorState)}>
                            <InsertLinkIcon className={classnames('ico-editor')} />
                        </span>
                    </Tooltip>
                    <Tooltip title="Thêm ảnh">
                        <span
                            onMouseDown={(e) =>
                                addImage(
                                    e,
                                    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png'
                                )
                            }
                        >
                            <InsertPhotoIcon className="ico-editor" />
                        </span>
                    </Tooltip>
                </div>
                <Editor
                    blockRendererFn={mediaBlockRenderer}
                    ref={editorRef}
                    editorState={editorState}
                    onChange={setEditorState}
                    customStyleMap={customStyleMap}
                />
            </div>
            <Box
                sx={{
                    background: theme.colors.alpha.white[50],
                    display: 'flex',
                    alignItems: 'center',
                    p: 3
                }}
            >
                <Box flexGrow={1} display="flex" alignItems="center"></Box>
                <Box>
                    <Tooltip arrow placement="top" title="Cái này vô dụng">
                        <IconButton sx={{ fontSize: theme.typography.pxToRem(16) }} color="primary">
                            😀
                        </IconButton>
                    </Tooltip>
                    <Input accept="image/*" id="messenger-upload-file" type="file" />
                    <Tooltip arrow placement="top" title="Cái này cũng gần như thế">
                        <label htmlFor="messenger-upload-file">
                            <IconButton sx={{ mx: 1 }} color="primary" component="span">
                                <AttachFileTwoToneIcon fontSize="small" />
                            </IconButton>
                        </label>
                    </Tooltip>
                    <Button startIcon={<SendTwoToneIcon />} variant="contained" onClick={onAction}>
                        Tạo bài
                    </Button>
                </Box>
            </Box>
        </>
    );
}

export default CustomEditor;
