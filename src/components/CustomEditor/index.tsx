import * as React from 'react';

import classnames from 'classnames/bind';
import styles from './CustomEditor.module.scss';

import { Box, styled, Divider, Typography, Stack, Chip, Tooltip, IconButton, Button, useTheme, InputAdornment, TextField, Snackbar, Alert } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AttachFileTwoToneIcon from '@mui/icons-material/AttachFileTwoTone';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';

import { Article } from '../../services/data/dataService';

const cx = classnames.bind(styles);

const DividerWrapper = styled(Divider)(
    ({ theme }) => `
      .MuiDivider-wrapper {
        border-radius: ${theme.general.borderRadiusSm};
        text-transform: none;
        background: ${theme.palette.background.default};
        font-size: ${theme.typography.pxToRem(13)};
        color: ${theme.colors.alpha.black[50]};
      }
`
);

const Input = styled('input')({
    display: 'none'
});

function CustomEditor() {
    const theme = useTheme();

    const [res, setRes] = React.useState(0);
    const [resMessage, setResMessage] = React.useState('');
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

    const handleClose = () => {
        setResMessage('')
    }

    const resetDataSend = () => {
        setTags([])
        setTitle('')
        setDescription('')
    }

    const onAction = () => {
        if (title != '') {
            let sv = new Article();
            let data = {
                "title": title,
                "description": description,
                "hashTag": tags.join(',')
            }
            sv.create(data).then(d => {
                resetDataSend()
                setRes(1);
                setResMessage('Tạo bài viết thành công');
            })
        } else {
            setRes(0);
            setResMessage('Tiêu đề không được để trống');
        }
    }

    return (<>
    {resMessage != '' && <Box
            sx={{
                background: theme.colors.alpha.white[50],
                display: 'flex',
                alignItems: 'center',
                pl: 1,
                pr: 1
            }}
        >
            <Box flexGrow={1} display="flex" alignItems="center">
                {/* <Avatar sx={{ display: { xs: 'none', sm: 'flex' }, mr: 1 }} alt={user.name} src={user.avatar} /> */}
                {/* <MessageInputWrapper autoFocus placeholder="Write your message here..." fullWidth /> */}
                <Alert onClose={handleClose} severity={ res == 1 ? "success" : "error"} sx={{ width: '100%', right: 0 }}>
                    {resMessage}
                </Alert>
            </Box>
        </Box>}
            <Box p={3}>
            <Box sx={{ m: 0 }}>
                <Typography gutterBottom variant="body1">
                    Gắn thẻ bài viết
                </Typography>
                <Stack direction="row" spacing={1}>
                    {tags.length > 0 ? (
                        tags.map((tag, index) => <Chip key={index} color="primary" label={`#${tag}`} />)
                    ) : (
                        <></>
                    )}
                </Stack>
            </Box>
            <div className={cx('tags-container')}>
                <TextField
                    className={cx('editor-tags')}
                    id="input-with-icon-textfield"
                    label=""
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
            {/* <DividerWrapper /> */}
            <div>
                <TextField
                    className={cx('editor-header')}
                    required
                    id="outlined-required"
                    label="Tiêu đề"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </div>
            <div>
                <TextField
                    className={cx('editor-content')}
                    id="outlined-multiline-static"
                    label="Nội dung"
                    multiline
                    rows={6}
                    defaultValue="Nhập nội dung ..."
                    onChange={e => setDescription(e.target.value)}
                />
            </div>
        </Box>
        <Box
            sx={{
                background: theme.colors.alpha.white[50],
                display: 'flex',
                alignItems: 'center',
                p: 3
            }}
        >
            <Box flexGrow={1} display="flex" alignItems="center">
                {/* <Avatar sx={{ display: { xs: 'none', sm: 'flex' }, mr: 1 }} alt={user.name} src={user.avatar} /> */}
                {/* <MessageInputWrapper autoFocus placeholder="Write your message here..." fullWidth /> */}
            </Box>
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
    </>);
}

export default CustomEditor;
