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

    public async uploadImage(data: any) {
        let result = await http.post(`api/services/app/Articles/UploadImage`, data);
        return result.data.result;
    }
}

export class Book {
    public async get(id: number) {
        await http.get(`api/services/app/Books/Get?id=${id}`);
    }

    public async getAll() {
        let result = await http.get('api/services/app/Books/GetAll');
        return result.data.result;
    }

    public async create(data: any) {
        await http.post('api/services/app/Books/Create', data);
    }

    public async delete(id: number) {
        await http.delete(`api/services/app/Books/Delete?id=${id}`);
    }

    public async uploadImage(data: any) {
        let result = await http.post(`api/services/app/Books/UploadImage`, data);
        return result.data.result;
    }
}

export class Knowledge {
    public async get(id: number) {
        await http.get(`api/services/app/Knowledges/Get?id=${id}`);
    }

    public async getAll() {
        let result = await http.get('api/services/app/Knowledges/GetAll');
        return result.data.result;
    }

    public async create(data: any) {
        await http.post('api/services/app/Knowledges/Create', data);
    }

    public async delete(id: number) {
        await http.delete(`api/services/app/Knowledges/Delete?id=${id}`);
    }

    public async uploadImage(data: any) {
        let result = await http.post(`api/services/app/Knowledges/UploadImage`, data);
        return result.data.result;
    }
}

export class KnowledgeYoutubeUrl {
    public async get(id: number) {
        await http.get(`api/services/app/KnowledgeYoutubeUrls/Get?id=${id}`);
    }

    public async getAll() {
        let result = await http.get('api/services/app/KnowledgeYoutubeUrls/GetAll');
        return result.data.result;
    }

    public async create(data: any) {
        await http.post('api/services/app/KnowledgeYoutubeUrls/Create', data);
    }

    public async delete(id: number) {
        await http.delete(`api/services/app/KnowledgeYoutubeUrls/Delete?id=${id}`);
    }
}

export default new DataService();
