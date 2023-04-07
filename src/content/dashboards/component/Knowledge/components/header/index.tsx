import { Typography } from 'antd';
import styles from './KnowledgeHeader.module.scss';
import classnames from 'classnames/bind';
import ButtonModalComponent from 'src/custom/ButtonModal';
import QuillEditorComponent from 'src/custom/QuillEditor';
import authentication from 'src/stores/authenticationStore';
import { observer } from 'mobx-react';

const { Title, Text } = Typography;
const cx = classnames.bind(styles);

const KnowledgeHeader = () => {
    return (
        <div>
            <Title level={2}>Bài viết nổi bật</Title>
            {authentication.localUser != '' && (
                <ButtonModalComponent type="button" displayText="Tạo bài đăng mới" content={<QuillEditorComponent />} />
            )}
            {/* <Text className={cx('knowledge-header-description')}>
                Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình online và các kỹ thuật lập trình web.
            </Text> */}
        </div>
    );
};

export default observer(KnowledgeHeader);
