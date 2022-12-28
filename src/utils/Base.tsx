import * as React from 'react';

class Base {
    removeSpace(text: string) {
        return text.replace(/\s+/g, '');
    }

    checkZeroTextLength(text: string) {
        return text === '';
    }
}

export default new Base();
