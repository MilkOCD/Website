import { Helmet } from 'react-helmet-async';

import authentication from 'src/stores/authenticationStore';
import Status404 from 'src/content/pages/Status/Status404';
import gStore from 'src/stores/GlobalStore';
import StatusComingSoon from 'src/content/pages/Status/ComingSoon';
import { observer } from 'mobx-react';

function Blank() {
    return (
        <>
            {/* {console.log(authentication.localUser)} */}
            <Helmet>
                <title>TopFin - Tin tức</title>
            </Helmet>
            {authentication.localUser == '' ? (
                <>
                    <div style={{ top: 100 }}>
                        <Status404 />
                    </div>
                    {gStore.openToast({
                        message: 'Bạn cần phải đăng nhập để sử dụng tính năng này',
                        type: 'error',
                        open: true
                    })}
                </>
            ) : (
                <StatusComingSoon />
            )}
        </>
    );
}

export default observer(Blank);
