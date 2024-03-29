const success = (state, action) => {
  const {data, search, isLoading} = action.payload
  let allExchanges = {}
  data.forEach(exchange => {
    // commented for unFollow exchange bug ; better to change in future
    // allExchanges[exchange.id] = {...state.list[exchange.id], ...exchange}
    let data = {...exchange.exchange}
    data.joint_follows = exchange.joint_follows
    data.is_joined = exchange.is_joined
    data.supply = exchange.supply
    data.demand = exchange.demand
    state.list[exchange.exchange.id] ?
        allExchanges[exchange.exchange.id] = {
          ...state.list[exchange.exchange.id],
          exchange: {...state.list[exchange.exchange.id].exchange, content: {...state.list[exchange.exchange.id].exchange.content, ...data}, isLoading: false, error: null}
        }
        :
        allExchanges[exchange.exchange.id] = {
          ...state.list[exchange.exchange.id],
          exchange: {content: {...data}, isLoading: false, error: null}
        }
  })

  return {
    ...state,
    list: {
      ...state.list,
      ...allExchanges,
    },
    searchByWord: search,
    isLoading: isLoading
  }
}

const error = (state, action) => {

}

const base = (state, action) => {

}

export default {
  base,
  error,
  success
}