import constants from "src/consts/constants"

const base = (state, action) => {
  const {exchangeMembershipOwnerId, exchangeMembershipOwnerType} = action.payload || {}
  const defaultObject = {content: [], isLoading: false, error: null}
  const previousMembership = (state.list[exchangeMembershipOwnerId] && state.list[exchangeMembershipOwnerId].exchangeMemberships) || defaultObject
  if (exchangeMembershipOwnerType === constants.USER_TYPES.ORG) {
    return {
      ...state,
      list: {
        ...state.list,
        [exchangeMembershipOwnerId]: {
          ...state.list[exchangeMembershipOwnerId],
          exchangeMemberships: {
            ...previousMembership,
            isLoading: true,
            error: null
          }
        }
      }
    }
  }
  else {
    return state
  }
}

const success = (state, action) => {
  const {exchangeMembershipOwnerId, exchangeMembershipOwnerType, data} = action.payload || {}
  const defaultObject = {content: [], isLoading: false, error: null}
  const previousMembership = (state.list[exchangeMembershipOwnerId] && state.list[exchangeMembershipOwnerId].exchangeMemberships) || defaultObject
  if (exchangeMembershipOwnerType === constants.USER_TYPES.ORG) {
    const arrayOfMembershipId = data.map(exchangeMembership => exchangeMembership.id)
    return {
      ...state,
      list: {
        ...state.list,
        [exchangeMembershipOwnerId]: {
          ...state.list[exchangeMembershipOwnerId],
          exchangeMemberships: {
            ...previousMembership,
            // content: [...new Set([...previousMembership.content, ...arrayOfMembershipId])],
            content: arrayOfMembershipId,
            isLoading: false,
            error: null
          }
        }
      }
    }
  }
  else {
    return state
  }
}

const error = (state, action) => {
  const {exchangeMembershipOwnerId, exchangeMembershipOwnerType, message} = action.payload || {}
  const defaultObject = {content: [], isLoading: false, error: null}
  const previousMembership = (state.list[exchangeMembershipOwnerId] && state.list[exchangeMembershipOwnerId].exchangeMemberships) || defaultObject
  if (exchangeMembershipOwnerType === constants.USER_TYPES.ORG) {
    return {
      ...state,
      list: {
        ...state.list,
        [exchangeMembershipOwnerId]: {
          ...state.list[exchangeMembershipOwnerId],
          exchangeMemberships: {
            ...previousMembership,
            isLoading: false,
            error: message
          }
        }
      }
    }
  }
  else {
    return state
  }
}

export default {
  base,
  success,
  error,
}