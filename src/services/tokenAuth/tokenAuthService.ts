import { AuthenticationModel } from './dto/authenticationModel';
import { AuthenticationResultModel } from './dto/authenticationResultModel';
import http from '../httpService';
import gStore from 'src/stores/GlobalStore';

class TokenAuthService {
    public async authenticate(authenticationInput: AuthenticationModel): Promise<AuthenticationResultModel> {
        let result = null;
        await http.post('api/TokenAuth/Authenticate', authenticationInput).then((d) => {
            result = d;
            this.init(true);
        });
        return result.data.result;
    }

    public async init(allow: boolean = false) {
        if (allow) {
            // await gStore.loadNews();
        }
    }
}

export default new TokenAuthService();
