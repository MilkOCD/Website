import styles from './Knowledge.module.scss';
import classnames from 'classnames/bind';
import KnowledgeHeader from './components/header';
import KnowledgeBody from './components/body';

const cx = classnames.bind(styles);

const KnowledgeComponent = () => {
    return (
        <div className={cx('knowledge-component-container')}>
            <KnowledgeHeader />
            <KnowledgeBody />
        </div>
    );
};

export default KnowledgeComponent;
