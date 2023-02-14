import http from '../httpService';

class DataService {}

export class Article {
    public async get(id: number) {
        await http.get(`api/services/app/Articles/Get?id=${id}`);
    }

    public async getAll() {
        let result = await http.get('api/services/app/Articles/GetAll');
        return result.data.result;
    }

    public async create(data: any) {
        await http.post('api/services/app/Articles/Create', data);
    }

    public async update(id: number, data: any) {
        await http.put(`api/services/app/Articles/Update?id=${id}`, data);
    }

    public async delete(id: number) {
        await http.delete(`api/services/app/Articles/Delete?id=${id}`);
    }
}

export default new DataService();
