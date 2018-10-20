import React, {Component} from 'react'
import LinkedInIcon from "../../../images/common/linkedin_svg"
import {bindActionCreators} from "redux"
import connect from "react-redux/es/connect/connect"

class LinkedAccounts extends Component {
  render() {
    return (
        <div>
          <div className='settingModal-menu-manage-hint'>
            بارگزاری مخاطبین شما در شبکه های دیگر، به اینوین کمک می کند تا پیشنهاد های دقیق تری برای گسترش ارتباطتتان
            به شما ارائه کند. ما بدون اطلاع شما با هیچ یک از این افراد ارتباط (ایمیل، پیامک
            و ...) نخواهیم گرفت.
          </div>

          <div className='settingModal-menu-manage-container'>
            <div className='settingModal-menu-manage-title'>
              {this.props.translate["Google"]}
            </div>
            <LinkedInIcon className='settingModal-menu-manage-logo'/>
            <div className='settingModal-menu-manage-address'>testtest78@bullshit.com</div>
            <button className='settingModal-menu-manage-remove'>{this.props.translate["Disconnect"]}</button>
          </div>

          <div className='settingModal-menu-manage-container'>
            <div className='settingModal-menu-manage-title'>
              {this.props.translate["Linkedin"]}
            </div>
            <LinkedInIcon className='settingModal-menu-manage-logo'/>
            <div className='settingModal-menu-manage-address'>testtest78@bullshit.com</div>
            <button className='settingModal-menu-manage-add'>{this.props.translate["Add"]}</button>
          </div>

        </div>
    )
  }
}

const mapStateToProps = state => ({
  translate: state.intl.messages.topBar
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(LinkedAccounts)