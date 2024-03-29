import api from 'src/consts/api'
import urls from 'src/consts/URLS'
import results from 'src/consts/resultName'
import types from 'src/redux/actions/types'
import {select, put, take, fork, call} from "redux-saga/effects"
import constants from "src/consts/constants";
import uuid from 'uuid'

export function* createPost(action) {
  const {formValues, postOwnerId, postOwnerType, postParentId, postParentType} = action.payload
  const socketChannel = yield call(api.createSocketChannel, results.COMMON.POST.CREATE_POST)
  const state = yield select()
  const translate = state.intl.messages

  try {
    yield fork(api.post, urls.COMMON.POST, results.COMMON.POST.CREATE_POST, formValues)
    const data = yield take(socketChannel)
    yield put({
      type: types.SUCCESS.COMMON.POST.CREATE_POST,
      payload: {data, postOwnerId, postOwnerType, postParentId, postParentType}
    })
    const postIdentity = data.post_identity
    yield put({type: types.COMMON.POST.GET_POST_BY_IDENTITY, payload: {postIdentity, postOwnerId, postOwnerType}})
    yield put({
      type: types.TOAST.ADD_TOAST,
      payload: {
        data: {
          id: uuid(),
          type: constants.TOAST_TYPE.SUCCESS,
          content: {
            text: translate['Create post done']
          }
        }
      }
    })
  } catch (error) {
    const {message} = error
    yield put({
      type: types.ERRORS.COMMON.POST.CREATE_POST,
      payload: {message}
    })
  } finally {
    socketChannel.close()
  }
}