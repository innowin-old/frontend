import urls from "../../consts/URLS"
import {call, fork, put, take, takeEvery} from "redux-saga/effects"
import api from "../../consts/api"
import types from "../actions/types"
import results from "../../consts/resultName"

/** ----------------------------- WORKERS ---------------------------**/
//1 - get user identity
function* getUserIdentity(action) {
  const {payload} = action
  const {userId} = payload
  const socketChannel = yield call(api.createSocketChannel, results.GET_IDENTITY)
  try {
    yield fork(api.get, urls.GET_IDENTITY, results.GET_IDENTITY, `?identity_user=${userId}`)
    const dataList = yield take(socketChannel)
    const data = dataList[0]
    yield put({type:types.SUCCESS.USER.GET_USER_IDENTITY, payload:{data, userId}})
  } catch (e) {
    const {message} = e
    yield put({type:types.ERRORS.USER.GET_USER_IDENTITY, payload:{message, userId}})
  } finally {
    socketChannel.close()
  }
}

//2 - get org identity
export function* getOrgIdentity(action) {
  const payload = action.payload
  const {organizationId} = payload
  const socketChannel = yield call(api.createSocketChannel, results.GET_IDENTITY)
  try {
    yield fork(api.get, urls.GET_IDENTITY, results.GET_IDENTITY, `?identity_organization=${organizationId}`)
    const data = yield take(socketChannel)
    yield put({type: types.SUCCESS.ORG.GET_ORG_IDENTITY, payload: data})
    // return data because of throw data to father function that maybe use from this function
    return data
  } catch (e) {
    const {message} = e
    yield put({
      type: types.ERRORS.ORG.GET_ORG_IDENTITY,
      payload: {type: types.ERRORS.ORG.GET_ORG_IDENTITY, message}
    })
    // throw error to father function that maybe use from this function
    throw new Error(e)
  } finally {
    socketChannel.close()
  }
}


/** ----------------------------- WATCHERS ---------------------------**/

//1 - get user identity
export function* watchGetUserIdentity() {
  yield takeEvery(types.USER.GET_USER_IDENTITY, getUserIdentity)
}

//2- get org identity
export function* watchGetOrgIdentity() {
  yield takeEvery(types.ORG.GET_ORG_IDENTITY, getOrgIdentity)
}

export default{
  watchGetUserIdentity,
  watchGetOrgIdentity
}