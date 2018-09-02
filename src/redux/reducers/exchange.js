import initialState from 'src/redux/reducers/initialState'
import types from 'src/redux/actions/types'
import slices from './exchangeSlices'

// this badge function just set received success exchanges in user or organ or ...

<<<<<<< HEAD
// const exchanges = (state = initialState.exchanges, action) => {
// 	const {data, postParent, exchangeId, message} = action.payload || {}
// 	// const prevExchange = state[exchangeId] && state[exchangeId].exchange
// 	switch (action.type) {
// 			/** --------------------  get exchange --------------------- **/
// 			// case types.EXCHANGE.GET_EXCHANGES_BY_MEMBER_IDENTITY:
// 			//   return {
// 			//     ...state,
// 			//     [exchangeId]: {
// 			//       ...state[exchangeId],
// 			//       exchange: {
// 			//         ...prevExchange,
// 			//         isLoading: true,
// 			//         error: null
// 			//       }
// 			//     }
// 			//   }
// 		case types.SUCCESS.EXCHANGE.GET_EXCHANGES_BY_MEMBER_IDENTITY:
// 			return {
// 				...state,
// 				...data
// 			}
// 		case types.SUCCESS.COMMON.FILTER_POSTS_BY_POST_PARENT_LIMIT_OFFSET:
// 			const {parentId, parentType} = postParent
// 			const postResults = data.results
// 			const postIds = postResults.map(post => post.id)
// 			if (parentType === 'exchange' && postIds.length > 0) {
// 				return {
// 					...state,
// 					[parentId]: {
// 						...state[parentId],
// 						posts: {
// 							content: postIds,
// 							isLoading: falsegetExchangeByExId
// 						}
// 					}
// 				}
// 			}
// 			return {...state}
//
// 			// case types.ERRORS.EXCHANGE.GET_EXCHANGES_BY_MEMBER_IDENTITY:
// 			//   return {
// 			//     ...state,
// 			//     [exchangeId]: {
// 			//       ...state[exchangeId],
// 			//       exchange: {
// 			//         content:{},
// 			//         isLoading: false,
// 			//         error: message
// 			//       }
// 			//     }
// 			//   }
//
// 			/** ----------------- reset -----------------> **/
// 		case types.RESET:
// 			return initialState.exchanges
// 		default:
// 			return {...state}
// 	}
// }

const exchanges = (state = initialState.exchanges, action) => {
	switch (action.type) {
		case types.SUCCESS.EXCHANGE.GET_EXCHANGE_BY_EX_ID:
			return slices.getExchangeByExId(state , action)
		
		case types.RESET:
			return initialState.exchanges
		
		default:
			return state
	}
=======
const exchanges = (state = initialState.exchanges, action) => {
  const {data, exchangeId, message, postParentId, postParentType, postId} = action.payload || {}
  // const prevExchange = state[exchangeId] && state[exchangeId].exchange
  switch (action.type) {
    /** --------------------  get exchange --------------------- **/
    // case types.EXCHANGE.GET_EXCHANGES_BY_MEMBER_IDENTITY:
    //   return {
    //     ...state,
    //     [exchangeId]: {
    //       ...state[exchangeId],
    //       exchange: {
    //         ...prevExchange,
    //         isLoading: true,
    //         error: null
    //       }
    //     }
    //   }
    case types.SUCCESS.EXCHANGE.GET_EXCHANGES_BY_MEMBER_IDENTITY:
      return {
        ...state,
        ...data
      }
    case types.SUCCESS.COMMON.FILTER_POSTS_BY_POST_PARENT_LIMIT_OFFSET:
      const postResults = data.results
      const postIds = postResults.map(post => post.id)
      if (postParentType === 'exchange' && postIds.length > 0) {
        const exchangeId = postParentId
        return {
          ...state,
          [exchangeId]: {
            ...state[exchangeId],
            posts: {
              content: postIds,
              isLoading: false,
              error:null
            }
          }
        }
      }
      return {...state}

    // case types.ERRORS.EXCHANGE.GET_EXCHANGES_BY_MEMBER_IDENTITY:
    //   return {
    //     ...state,
    //     [exchangeId]: {
    //       ...state[exchangeId],
    //       exchange: {
    //         content:{},
    //         isLoading: false,
    //         error: message
    //       }
    //     }
    //   }

    /** -------------------------- create post  -------------------------> **/
    case types.SUCCESS.COMMON.POST.CREATE_POST:
      if (postParentType === 'exchange') {
        const exchangeId = data.post_parent
        const prevPosts = state[exchangeId] && state[exchangeId].posts
        const prevPostsContent = prevPosts && prevPosts.content
        return {
          ...state,
          [exchangeId]: {
            ...state[exchangeId],
            posts: {
              content: [data.id, ...prevPostsContent],
              isLoading: false,
              error: null
            }
          }
        }
      } else return {
        ...state
      }
    /** -------------------------- delete post  -------------------------> **/
    case types.SUCCESS.COMMON.POST.DELETE_POST:
      if (postParentType === 'exchange') {
        const exchangeId = postParentId
        const prevPosts = state[exchangeId] && state[exchangeId].posts
        const prevPostsContent = prevPosts && prevPosts.content
        const newDeletedPosts = prevPostsContent.filter(id => id !== postId)
        return {
          ...state,
          [exchangeId]: {
            ...state[exchangeId],
            posts: {
              content: [...newDeletedPosts],
              isLoading: false,
              error: null
            }
          }
        }
      } else return {...state}
    /** ----------------- reset -----------------> **/
    case types.RESET:
      return initialState.exchanges
    default:
      return {...state}
  }
>>>>>>> e5a9619dc2511553757989df32dc6d19cd5bbc7a
}
export default exchanges