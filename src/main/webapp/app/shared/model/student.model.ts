export interface IStudent {
    id?: any;
    firstName?: string;
    lastName?: string;
    email?: string;
}

export const defaultValue: Readonly<IStudent> = {
    id: '',
    firstName: '',
    lastName: '',
    email: ''
};
