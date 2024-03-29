const BASE = {
	FILTER_POSTS_BY_POST_PARENT_LIMIT_OFFSET : 'FILTER_POSTS_BY_POST_PARENT_LIMIT_OFFSET',
  FILTER_POSTS_BY_POST_RELATED_PRODUCT: 'FILTER_POSTS_BY_POST_RELATED_PRODUCT',
  GET_POST_BY_IDENTITY: 'GET_POST_BY_IDENTITY',
  GET_POST_VIEWER_COUNT:'GET_POST_VIEWER_COUNT',
  SET_POST_VIEWER:'SET_POST_VIEWER',
  CREATE_POST: 'CREATE_POST',
  UPDATE_POST: 'UPDATE_POST',
  DELETE_POST: 'DELETE_POST',
  GET_POST: 'GET_POST',
}

const SUCCESS = {
	FILTER_POSTS_BY_POST_PARENT_LIMIT_OFFSET : 'FILTER_POSTS_BY_POST_PARENT_LIMIT_OFFSET_SUCCESS',
  FILTER_POSTS_BY_POST_RELATED_PRODUCT : 'FILTER_POSTS_BY_POST_RELATED_PRODUCT_SUCCESS',
  GET_POST_BY_IDENTITY: 'GET_POST_BY_IDENTITY_SUCCESS',
  GET_POST_VIEWER_COUNT:'GET_POST_VIEWER_COUNT_SUCCESS',
  SET_POST_VIEWER:'SET_POST_VIEWER_SUCCESS',
  CREATE_POST: 'CREATE_POST_SUCCESS',
  UPDATE_POST: 'UPDATE_POST_SUCCESS',
  DELETE_POST: 'DELETE_POST_SUCCESS',
  GET_POST: 'GET_POST_SUCCESS',
}

const ERROR = {
	FILTER_POSTS_BY_POST_PARENT_LIMIT_OFFSET : 'FILTER_POSTS_BY_POST_PARENT_LIMIT_OFFSET_ERROR',
	FILTER_POSTS_BY_POST_RELATED_PRODUCT : 'FILTER_POSTS_BY_POST_RELATED_PRODUCT_ERROR',
  GET_POST_BY_IDENTITY: 'GET_POST_BY_IDENTITY_ERROR',
  GET_POST_VIEWER_COUNT:'GET_POST_VIEWER_COUNT_ERROR',
  SET_POST_VIEWER:'SET_POST_VIEWER_ERROR',
  CREATE_POST: 'CREATE_POST_ERROR',
  UPDATE_POST: 'UPDATE_POST_ERROR',
  DELETE_POST: 'DELETE_POST_ERROR',
  GET_POST: 'GET_POST_ERROR',
}

export default {
	BASE,
	ERROR,
	SUCCESS,
}
