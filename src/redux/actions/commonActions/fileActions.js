import types from '../types'


export const createFile = (formData) => ({
    type: types.COMMON.CREATE_FILE,
    payload: {
        formData
    }
})

export const updateFile = (payload) => ({
    type: types.COMMON.UPDATE_FILE,
    payload
})

export const delMiddleWareFileData = () => ({ // this is not used yet, and may be remove.
    type: types.COMMON.DEL_MIDDLEWARE_FILE_DATA,
    payload: {}
})