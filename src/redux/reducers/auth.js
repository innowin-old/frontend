import initialState from './initialState'
import types from '../actions/types'
import slices from './sliceReducers/auth'

const auth = (state = initialState.auth, action) => {
  switch (action.type) {
    /** -------------------------- sign in -------------------------> **/
    case types.AUTH.SET_TOKEN:
      return slices.setToken.base(state, action)
    case types.SUCCESS.AUTH.SIGN_IN:
      return slices.signIn.success(state, action)
    case types.ERRORS.AUTH.SIGN_IN:
      return slices.signIn.error(state, action)
    /** -------------------------- update user by user id -------------------------> **/
    case types.SUCCESS.USER.UPDATE_USER_BY_USER_ID:
      return slices.updateUserByUserId.success(state, action)
    /** -------------------------- update profile by profile id -------------------------> **/
    case types.SUCCESS.USER.UPDATE_PROFILE_BY_PROFILE_ID:
      return slices.updateProfileByProfileId.success(state, action)

    case types.SUCCESS.ORG.SET_ORGANIZATION_INFO_MEDIA:
      return slices.setClientOrganMedia.success(state, action)

    case types.SUCCESS.USER.SET_PROFILE_MEDIA:
      return slices.setClientPersonMedia.success(state, action)
    /** -------------------------- get posts by identity  -------------------------> **/
    case types.SUCCESS.COMMON.POST.GET_POST_BY_IDENTITY:
      return slices.getPostByIdentity.success(state, action)
    /** -------------------------- get post  -------------------------> **/
    case types.SUCCESS.COMMON.POST.GET_POST:
      return slices.getPost.success(state, action)
    /** -------------------------- create post  -------------------------> **/
    case types.SUCCESS.COMMON.POST.CREATE_POST:
      return slices.createPost.success(state, action)
    /** -------------------------- delete post  -------------------------> **/
    case types.SUCCESS.COMMON.POST.DELETE_POST:
      return slices.deletePost.success(state, action)
    /** -------------------------- get followers  -------------------------> **/
    case types.SUCCESS.COMMON.SOCIAL.GET_FOLLOWERS:
      return slices.getFollowers.success(state, action)
    /** -------------------------- get followees  -------------------------> **/
    case types.SUCCESS.COMMON.SOCIAL.GET_FOLLOWEES:
      return slices.getFollowees.success(state, action)
    /** -------------------------- delete follow  -------------------------> **/
    case types.SUCCESS.COMMON.SOCIAL.DELETE_FOLLOW:
      return slices.deleteFollow.success(state, action)
    /** -------------------------- delete follow  -------------------------> **/
    case types.SUCCESS.COMMON.SOCIAL.CREATE_FOLLOW:
      return slices.createFollow.success(state, action)
    /** -------------------------- get exchange membership by member identity -------------------------> **/
    case types.SUCCESS.COMMON.EXCHANGE_MEMBERSHIP.GET_EXCHANGE_MEMBERSHIP_BY_MEMBER_IDENTITY:
      return slices.getExchangeMembershipByMemberIdentity.success(state, action)
    /** -------------------------- delete exchange membership  -------------------------> **/
    case types.SUCCESS.COMMON.EXCHANGE_MEMBERSHIP.DELETE_EXCHANGE_MEMBERSHIP:
      return slices.deleteExchangeMembership.success(state, action)
    /** -------------------------- get work experience by user id  -------------------------> **/
    case types.SUCCESS.WORK_EXPERIENCE.GET_USER_WORK_EXPERIENCES_BY_USER_ID:
      return slices.getWorkExperienceByUserId.success(state, action)
    /** -------------------------- create work experience by user id -------------------------> **/
    case types.SUCCESS.WORK_EXPERIENCE.CREATE_USER_WORK_EXPERIENCES_BY_USER_ID:
      return slices.createWorkExperienceByUserId.success(state, action)
    /** -------------------------- delete work experience by user id -------------------------> **/
    case types.SUCCESS.WORK_EXPERIENCE.DELETE_USER_WORK_EXPERIENCES_BY_USER_ID:
      return slices.deleteWorkExperienceByUserId.success(state, action)
    /** -------------------------- get education by user id  -------------------------> **/
    case types.SUCCESS.EDUCATION.GET_USER_EDUCATION_BY_USER_ID:
      return slices.getEducationByUserId.success(state, action)
    /** -------------------------- create education by user id -------------------------> **/
    case types.SUCCESS.EDUCATION.CREATE_USER_EDUCATION_BY_USER_ID:
      return slices.createEducationByUserId.success(state, action)
    /** -------------------------- delete education by user id -------------------------> **/
    case types.SUCCESS.EDUCATION.DELETE_USER_EDUCATION_BY_USER_ID:
      return slices.deleteEducationByUserId.success(state, action)
    /** -------------------------- get research by user id  -------------------------> **/
    case types.SUCCESS.RESEARCH.GET_USER_RESEARCH_BY_USER_ID:
      return slices.getResearchByUserId.success(state, action)
    /** -------------------------- create research by user id -------------------------> **/
    case types.SUCCESS.RESEARCH.CREATE_USER_RESEARCH_BY_USER_ID:
      return slices.createResearchByUserId.success(state, action)
    /** -------------------------- delete research by user id -------------------------> **/
    case types.SUCCESS.RESEARCH.DELETE_USER_RESEARCH_BY_USER_ID:
      return slices.deleteResearchByUserId.success(state, action)
    /** -------------------------- get skill by user id  -------------------------> **/
    case types.SUCCESS.SKILL.GET_SKILL_BY_USER_ID:
      return slices.getSkillByUserId.success(state, action)
    /** -------------------------- delete skill by user id -------------------------> **/
    case types.SUCCESS.SKILL.DELETE_SKILL_BY_USER_ID:
      return slices.deleteSkillByUserId.success(state, action)
    /** -------------------------- get products by identity  -------------------------> **/
    case types.SUCCESS.COMMON.PRODUCT.GET_PRODUCTS_BY_IDENTITY:
      return slices.getProductsByIdentity.success(state, action)
    /** -------------------------- delete product  -------------------------> **/
    case types.SUCCESS.COMMON.PRODUCT.DELETE_PRODUCT:
      return slices.deleteProduct.success(state, action)
    /** -------------- get Certificate -------------> **/
    case types.SUCCESS.COMMON.CERTIFICATE.GET_CERTIFICATES_BY_IDENTITY:
      return slices.getCertificatesByIdentity.success(state, action)
    /** -------------------------- delete Certificate -------------------------> **/
    case types.SUCCESS.COMMON.CERTIFICATE.DELETE_CERTIFICATE:
      return slices.deleteCertificate.success(state, action)
    /** -------------------------- get customers by organization id  -------------------------> **/
    case types.SUCCESS.ORG.GET_CUSTOMERS_BY_ORGANIZATION_ID:
      return slices.getCustomersByOrganizationId.success(state, action)
    /** -------------------------- delete customer -------------------------> **/
    case types.SUCCESS.ORG.DELETE_CUSTOMER:
      return slices.deleteCustomer.success(state, action)
    /** -------------------------- create customer -------------------------> **/
    case types.SUCCESS.ORG.CREATE_CUSTOMER:
      return slices.createCustomer.success(state, action)
    /** -------------------------- get ability by organization id  -------------------------> **/
    case types.SUCCESS.ABILITY.GET_ABILITIES_BY_ORGANIZATION_ID:
      return slices.getAbilitiesByOrganizationId.success(state, action)
    /** -------------------------- delete ability -------------------------> **/
    case types.SUCCESS.ABILITY.DELETE_ABILITY:
      return slices.deleteAbility.success(state, action)
    /** -------------------------- create ability -------------------------> **/
    case types.SUCCESS.ABILITY.CREATE_ABILITY:
      return slices.createAbility.success(state, action)
    /** -------------------------- reset  -------------------------> **/
    case types.RESET:
      console.log("------------------- I'm in reset.")
      return initialState.auth
    default:
      return state
  }
}

export default auth