export interface IFile {
    _id: string,
    name: string,
    date: Date,
    members: string[],
    other?: string
}