import * as React from 'react';

import { Box, styled, Divider, Typography, Stack, Chip } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import classnames from 'classnames/bind';
import styles from './CustomEditor.module.scss';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

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

function CustomEditor() {
    const [tags, setTags] = React.useState([]);

    const tagsHandler = (value) => {
        let newTag = value.target.value;
        let isValidTag = newTag != '' && !tags.find((d) => d == newTag);
        if (isValidTag) {
            setTags([...tags, value.target.value]);
        }
    };

    return (
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
                    defaultValue="Nhập tiêu đề ..."
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
                />
            </div>
        </Box>
    );
}

export default CustomEditor;
