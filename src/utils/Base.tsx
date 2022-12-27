import * as React from 'react';

class Base {
    removeSpace(text: string) {
        return text.replace(/\s+/g, '');
    }
}

export default new Base();
