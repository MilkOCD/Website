import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './CreateNews.module.scss';
import BoxLoader from 'src/components/BoxLoader';
import RichTextEditor from 'src/components/RichTextEditor';

const cx = classNames.bind(styles);

function CreateNews() {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <>
            {loading ? (
                <BoxLoader />
            ) : (
                <div className={cx('create-news')}>
                    <div className={cx('container')}>
                        <RichTextEditor />
                    </div>
                </div>
            )}
        </>
    );
}

export default CreateNews;
