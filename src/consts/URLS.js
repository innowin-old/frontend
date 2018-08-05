import io from 'socket.io-client'

export const SOCKET_URL = 'http://socket.daneshboom.ir'
export const REST_URL = 'http://restful.daneshboom.ir'

//Socket
export const SOCKET = io(SOCKET_URL)

const urls =  {
	SIGN_IN : "api-token-auth",
	ORGANIZATION:{
		GET_ORGANIZATION : 'organizations',
		GET_ORGANIZATION_MEMBERS : 'organizations/staff',
		UPDATE_ORGANIZATION_INFO:'organizations',
		GET_PRODUCTS:'products',
		GET_USER_IDENTITY:'users/identities',
		GET_ORG_FOLLOWERS:'organizations/follows',
		GET_ORG_FOLLOWINGS:'organizations/follows',
		GET_ORG_EXCHANGES:'exchanges/identities',
		GET_ORG_CUSTOMERS:'organizations/customers',
		GET_ORG_CERTIFICATES:'base/certificates',
		UPDATE_CUSTOMER:'organizations/customers',
		CREATE_PRODUCT: 'products',
		GET_PRODUCT_CATEGORIES: 'products/category',
	},
  EXCHANGE: {
    GET_EXCHANGE_BY_EX_ID: 'exchanges',
    GET_EXCHANGES_BY_MEMBER_IDENTITY:'exchanges/identities',
		GET_EXCHANGE_MEMBERS_BY_EX_ID:'/exchanges/identities/',
	},
	CREATE_PRODUCT: 'products',
	CREATE_Skill: 'users/skills',
	PRODUCT: {
		BASE: 'products'
	}
}
export default urls