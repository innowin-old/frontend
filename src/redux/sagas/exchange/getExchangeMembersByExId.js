import api from "src/consts/api"
import results from "src/consts/resultName"
import types from "src/redux/actions/types"
import urls from "src/consts/URLS"
import {put, take, fork, call} from "redux-saga/effects"

export function* getExchangeMembersByExId(action) {
	const {Id} = action.payload
	const socketChannel = yield call(api.createSocketChannel, results.EXCHANGE.GET_EXCHANGE_MEMBERS_BY_EX_ID)
	try {
		yield fork(
				api.get,
				urls.EXCHANGE.GET_EXCHANGE_MEMBERS_BY_EX_ID,
				results.EXCHANGE.GET_EXCHANGE_MEMBERS_BY_EX_ID,
				`/${Id}`
		)
		const data = yield take(socketChannel)
		
		yield put({type: types.SUCCESS.EXCHANGE.DELETE_EXCHANGE_MEMBERSHIP, payload: {data}})
	} catch (err) {
		const {message} = err
		yield put({
			type: types.ERRORS.EXCHANGE.DELETE_EXCHANGE_MEMBERSHIP,
			payload: {message}
		})
	} finally {
		socketChannel.close()
	}
}