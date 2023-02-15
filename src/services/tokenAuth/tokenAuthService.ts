import { AuthenticationModel } from './dto/authenticationModel';
import { AuthenticationResultModel } from './dto/authenticationResultModel';
import http from '../httpService';
import gStore from 'src/stores/GlobalStore';

class TokenAuthService {
    public async authenticate(authenticationInput: AuthenticationModel): Promise<AuthenticationResultModel> {
        let result = await http.post('api/TokenAuth/Authenticate', authenticationInput);
        let allowed = result.status == 200;
        this.init(allowed);
        return result.data.result;
    }

    public async init(allow: boolean = false) {
        if (allow) {
            gStore.loadNews();
        }
    }
}

export default new TokenAuthService();
