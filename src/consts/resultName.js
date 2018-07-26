const results = {
	//sign in
	SIGN_IN : 'sign-in',
	ORG:{
		GET_ORGANIZATION : 'get-organization',
		GET_ORGANIZATION_MEMBERS: 'get-organization-members',
		UPDATE_ORGANIZATION_INFO:'update-organization-info',
		GET_USER_IDENTITY:'get-user-identity',
		GET_ORG_FOLLOWERS:'get-org-followers',
		GET_ORG_FOLLOWINGS:'get-org-followings',
		GET_ORG_EXCHANGES:'get-org-exchanges',
		GET_ORG_FOLLOWING:'get-org-following',
		GET_ORG_FOLLOWINGS_IDENTITIES:'get-org-followings-identities',
		GET_ORG_CUSTOMERS:'get-org-customers',
		GET_ORG_CERTIFICATES:'get-org-certificates',
		UPDATE_CUSTOMER:'update-org-customer',
		CREATE_PRODUCT:'create-org-product',
		GET_PRODUCT_CATEGORIES : 'get-product-category',
		GET_PRODUCTS : 'get-org-products',
		UPDATE_PRODUCT: 'update-org-product',
		ADD_PRODUCT_PICTURE:'add-org-product-picture',
		GET_PRODUCT_PICTURE:'get-org-product-picture'
	},
	PRODUCT: {
		GET_BASIC_INFO: 'get-product-basic-info'
	},

	EXCHANGE:{
		GET_EXCHANGES:'get-exchanges',
		GET_EXCHANGE_BY_ID:'get-exchanges-{id}',
		GET_EXCHANGES_BY_MEMBER_IDENTITY:'getExchangesByMemberIdentity',
	},
	
	//contribution
	CREATE_PRODUCT: 'create-product',
	CREATE_Skill: 'create-skill',

}
export default results