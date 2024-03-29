// @flow
import * as React from 'react'
import {Component} from 'react'
import PropTypes from 'prop-types'
import ExchangeMembershipActions from 'src/redux/actions/commonActions/exchangeMembershipActions'
import type {exchangeType} from 'src/consts/flowTypes/exchange/exchange.js'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {SeeViewIcon, RefreshIcon, SettingIcon, DefaultExchangeIcon, ChannelIcon} from 'src/images/icons'
import {getExchangeMembershipsSelector} from 'src/redux/selectors/common/social/getExchangeMemberships'
import Material from '../../common/components/Material'
import UserDetailPanel from '../../common/components/UserDetailPanel'

const DescriptionSideBarItem = ({description = '', className = ''}) => {
  return (
      <div className={className}>
        {description}
      </div>
  )
}

const FooterSideBarItem = ({exchangeId, className = ''}) => {
  return (
      <div className={className}>
        <Link to={'/exchange/' + exchangeId}><SeeViewIcon height="15px" className="cursor-pointer"/></Link>
        <SettingIcon height="16px" className="cursor-pointer mr-4"/>
        <RefreshIcon height="16px" className="cursor-pointer mr-4"/>
      </div>
  )
}

type PropsSideBarItem = {
  exchange: exchangeType,
  handleClick: Function,
  active: boolean
}

export class SideBarItem extends Component<PropsSideBarItem> {

  constructor(props) {
    super(props)
    this.state =
        {
          imageLoaded: false
        }
  }

  static propTypes = {
    exchange: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired,
    active: PropTypes.bool
  }

  componentDidMount() {
    if (this.props.exchange.exchange_image) {
      let image = new Image()
      image.src = this.props.exchange.exchange_image.file
      image.onload = () => {
        this.setState({...this.state, imageLoaded: true})
      }
    }
  }

  _onClickHandler = () => {
    const {handleClick, exchange} = this.props
    handleClick(exchange.id)
  }

  render() {
    const {active} = this.props
    const {exchange_image, name, description, id: exchangeId} = this.props.exchange
    return (
        <div className={`item-wrapper ${active ? 'active' : ''}`} onClick={this._onClickHandler}>
          <Material content={
            <div className="header-exchange">
              <Link to={'/exchange/' + exchangeId} className="default-logo">
                {exchange_image && this.state.imageLoaded ?
                    <img className="img-logo" src={exchange_image.file} alt="logo"/>
                    :
                    <ChannelIcon className='default-channel-icon'/>
                }
              </Link>
              <div className="exchange-name">{name}</div>
            </div>
          }/>
        </div>
    )
  }
}


type StateHomeSideBar = {|
  activeId: ?number
|}

type PropsHomeSideBar = {|
  identityId: number,
  activeExchangeId: ?number,
  setExchangeId: Function,
  classNames?: string,
  clientExchanges: ({ id: number })[],
  isLoading: boolean,
  error: ?string,
  actions: {
    getExchangeMembershipByMemberIdentity: Function
  },
  identityType: string,
  id: number,
|}

class HomeSideBar extends Component<PropsHomeSideBar, StateHomeSideBar> {
  static propTypes = {
    identityId: PropTypes.number.isRequired,
    activeExchangeId: PropTypes.number,
    setExchangeId: PropTypes.func.isRequired,
    classNames: PropTypes.string,
    identityType: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {activeId: null}
  }

  _handleClick = (id) => {
    const {setExchangeId} = this.props
    setExchangeId(id)
  }

  componentDidUpdate(prevProps) {
    const {setExchangeId, clientExchanges} = this.props
    if (!prevProps.activeExchangeId && clientExchanges.length > 0) {
      setExchangeId(clientExchanges[0].id)
    }
  }

  componentDidMount() {
    const {identityId, identityType, id} = this.props
    const {getExchangeMembershipByMemberIdentity} = this.props.actions
    getExchangeMembershipByMemberIdentity({
      identityId,
      exchangeMembershipOwnerType: identityType,
      exchangeMembershipOwnerId: id
    })
  }

  render() {
    const {clientExchanges, classNames, activeExchangeId} = this.props
    return (
        <div className={classNames}>
          <UserDetailPanel/>
          <div className='home-sidebar-cont-title'>
            <div className='home-sidebar-cont-item'>پنجره ها</div>
            <Link to='/Exchange/Exchange_Explorer' className='home-sidebar-cont-item-more'>بیشتر</Link>
          </div>
          <div className='home-sidebar-cont'>
            {
              (clientExchanges && clientExchanges.length > 0) ? (
                  clientExchanges.map((exchange, i) => {
                    return <SideBarItem key={i} exchange={exchange}
                                        handleClick={this._handleClick}
                                        active={exchange.id === activeExchangeId}/>
                  })
              ) : (<p className="mt-3 pr-3"><b>شما عضو هیچ پنجره ای نیستید!</b></p>)
            }
          </div>
          <div className='exchanges-last'/>
        </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => ({
  clientExchanges: getExchangeMembershipsSelector(state, ownProps)
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getExchangeMembershipByMemberIdentity: ExchangeMembershipActions.getExchangeMembershipByMemberIdentity
  }, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(HomeSideBar)