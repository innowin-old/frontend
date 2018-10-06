import React, {Component} from "react"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import postActions from "src/redux/actions/commonActions/postActions"
import exchangeActions from "src/redux/actions/exchangeActions"
import getUserAction from "src/redux/actions/user/getUserActions"
import StreamView from "./StreamView"
import InfoView from "./InfoView"
import {VerifyWrapper} from "../../common/cards/Frames"


class Exchange_Info extends Component {
  constructor(props) {
    super(props)
    this.state = {gotOwner: false}
  }

  componentDidMount() {
    const {
      actions,
      exchangeId,
      exchanges
    } = this.props
    actions.getPosts({postParentId: exchangeId, limit: 5, offset: 0})
    if (exchanges.list[exchangeId].owner) {
      actions.getUser(exchanges.list[exchangeId].owner.identity_user)
      this.state.gotOwner = true
    }
    actions.getExchangeById(exchangeId)
  }

  componentDidUpdate() {
    if (!this.state.gotOwner) {
      let {
        actions,
        exchangeId,
        exchanges
      } = this.props
      if (exchanges.list[exchangeId].owner) {
        actions.getUser(exchanges.list[exchangeId].owner.identity_user)

      }
    }
  }

  render() {
    const {activeTab} = this.props
    switch (activeTab) {
      case "Stream":
        const {posts} = this.props
        const postsList = posts.list
        return (
            <StreamView postsList={postsList}/>
        )
      case "Info":
        const {exchanges, exchangeId, users} = this.props
        const currentExchange = exchanges.list[exchangeId]
        if (currentExchange.owner) {
          const owner = users.list[currentExchange.owner.identity_user]
          if (owner) {
            return (
                <InfoView currentExchange={currentExchange} owner={owner}/>
            )
          }
          else {
            return <VerifyWrapper isLoading={true} error={false}/>
          }
        }
        else {
          return <VerifyWrapper isLoading={true} error={false}/>
        }
      case "Members":
        return (
            <div style={{textAlign: "center", marginTop: "10px"}}>
              In Develop
            </div>
        )
      default:
        return (
            <div style={{textAlign: "center", marginTop: "10px"}}>
              Undefined Data Type
            </div>
        )
    }
  }
}

const mapStateToProps = (state) => ({
  posts: state.common.post,
  exchanges: state.exchanges,
  users: state.users,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    getPosts: postActions.filterPostsByPostParentLimitOffset,
    getExchangeById: exchangeActions.getExchangeByExId,
    getUser: getUserAction.getProfileByUserId,
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Exchange_Info)