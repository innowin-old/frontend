const base = (state, action) => {
}

const success = (state, action) => {
  const {data} = action.payload
  return {
    ...state,
    list: {
      ...state.list,
      [data.id] : {...state.list[data.id], ...data, error: null, isLoading: false},
    }
  }
}

const error = (state, action) => {
}

export default {
  base,
  success,
  error,
}