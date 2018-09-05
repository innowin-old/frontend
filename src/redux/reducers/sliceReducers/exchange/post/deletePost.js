const success = (state, action) => {
  const {postId, postParentId} = action.payload
    const exchangeId = postParentId
    const prevPosts = state[exchangeId] && state[exchangeId].posts
    const prevPostsContent = prevPosts && prevPosts.content
    const newPosts = prevPostsContent.filter(id => id !== postId)
    return {
      ...state,
      [exchangeId]: {
        ...state[exchangeId],
        posts: {
          content: newPosts,
          isLoading: false,
          error: null
        }
      }
    }
}

const error = (state, action) => {

}

const base = (state, action) => {

}

const deletePost = {
  base,
  error,
  success
}

export default deletePost