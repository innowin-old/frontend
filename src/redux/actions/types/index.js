import commonTypes from './common/index'
import contributionTypes from './contribution'
import userTypes from './user'
import orgTypes from './organization'
import authTypes from './auth'
import exchangeTypes from './exchange'
import entityTypes from './entity'
import workExperienceTypes from './workExperience'

const types = {
	RESET: 'RESET',
	ERRORS: {
		COMMON: commonTypes.ERROR,
		AUTH: authTypes.ERROR,
		CONT: contributionTypes.ERROR, // contribution errors
		USER: userTypes.ERROR,
		ORG: orgTypes.ERROR, // organization errors
		EXCHANGE: exchangeTypes.ERROR,
		ENTITY: entityTypes.ERROR,
		WORK_EXPERIENCE: workExperienceTypes.ERROR,
	},
	SUCCESS: {
		COMMON: commonTypes.SUCCESS,
		AUTH: authTypes.SUCCESS,
		CONT: contributionTypes.SUCCESS, // contribution success
		USER: userTypes.SUCCESS,
		ORG: orgTypes.SUCCESS, // organization success
		EXCHANGE: exchangeTypes.SUCCESS,
		ENTITY: entityTypes.SUCCESS,
    WORK_EXPERIENCE: workExperienceTypes.SUCCESS,
	},
	COMMON: commonTypes.BASE,
	AUTH: authTypes.BASE,
	CONT: contributionTypes.BASE,
	USER: userTypes.BASE,
	ORG: orgTypes.BASE,
	EXCHANGE: exchangeTypes.BASE,
	ENTITY: entityTypes.BASE,
  WORK_EXPERIENCE: workExperienceTypes.BASE,
}

export default types