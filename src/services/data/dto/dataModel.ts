export interface ArticleModel {
    id?: number;
    title: string;
    description: string;
    hastag: string;
    creationTime?: Date;
    isDelelte?: boolean;
    deleteTime?: Date;
}