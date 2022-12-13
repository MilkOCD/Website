import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import './RichTextEditor.scss';

class RichTextEditor extends Component {
    state = {
        // editorState: EditorState.createEmpty()
        editorState: EditorState.createWithText('Nội dung')
    };

    onEditorStateChange: Function = (editorState) => {
        this.setState({
            editorState
        });
    };

    render() {
        const { editorState } = this.state;
        return (
            <div>
                <Editor editorState={editorState} onEditorStateChange={this.onEditorStateChange} />
            </div>
        );
    }
}

export default RichTextEditor;
