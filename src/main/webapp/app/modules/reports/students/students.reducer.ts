import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import { IStudent, defaultValue } from 'app/shared/model/student.model';

export const ACTION_TYPES = {
    FETCH_STUDENTS: 'students/FETCH_STUDENTS',
};

const initialState = {
    loading: false,
    errorMessage: null,
    students: [] as ReadonlyArray<IStudent>,
    authorities: [] as any[],
    student: defaultValue,
    updating: false,
    updateSuccess: false,
    totalItems: 0
};

export type StudentsState = Readonly<typeof initialState>;

// Reducer
export default (state: StudentsState = initialState, action): StudentsState => {
    switch (action.type) {
        case REQUEST(ACTION_TYPES.FETCH_STUDENTS):
            return {
                ...state
            };
        case REQUEST(ACTION_TYPES.FETCH_STUDENTS):
            return {
                ...state,
                errorMessage: null,
                updateSuccess: false,
                loading: true
            };

        case FAILURE(ACTION_TYPES.FETCH_STUDENTS):
            return {
                ...state,
                loading: false,
                updating: false,
                updateSuccess: false,
                errorMessage: action.payload
            };
        case SUCCESS(ACTION_TYPES.FETCH_STUDENTS):
            return {
                ...state,
                loading: false,
                students: action.payload.data,
                totalItems: action.payload.headers['x-total-count']
            };

        default:
            return state;
    }
};

const apiUrl = 'api/students';
// Actions
export const getStudents: ICrudGetAllAction<IStudent> = (page, size, sort) => {
    const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
    return {
        type: ACTION_TYPES.FETCH_STUDENTS,
        payload: axios.get<IStudent>(requestUrl)
    };
};

// export const getStudents: ICrudGetAction<IStudent> = student => {
//     const requestUrl = `${apiUrl};
//     return {
//         type: ACTION_TYPES.FETCH_USER,
//         payload: axios.get<IUser>(requestUrl)
//     };
// };


