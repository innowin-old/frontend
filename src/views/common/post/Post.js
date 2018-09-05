import * as React from "react";
import PropTypes from "prop-types";

import type {postType} from "../../../consts/flowTypes/common/post";
import constants from 'src/consts/constants'
import {VerifyWrapper} from "../cards/Frames";
import {PostEditForm} from "./PostEditForm";
import PostView from "./PostView";

type postPropTypes = {
  post: {
    post_identity: number,
    id: number,
  },
  posts: [],
  updatePost: Function,
  profileMedia: string,
  deletePost: Function
}

type postStateTypes = {
  post: {},
  postIdentity_username: string,
  postIdentity_name: string,
  postIdentityImg: string | null,
  edit: boolean,
  error: {} | boolean,
  isLoading: boolean,
}

export class Post extends React.Component<postPropTypes, postStateTypes> {

  static propTypes = {
    post: PropTypes.object.isRequired,
    posts: PropTypes.array.isRequired,
    updatePost: PropTypes.func.isRequired,
    profileMedia: PropTypes.string.isRequired,
    deletePost: PropTypes.func.isRequired
  };

  constructor(props: postPropTypes) {
    super(props)
    this.state = {
      postIdentity_username: '',
      postIdentity_name: '',
      postIdentityImg: null,
      edit: false
    }
  }

  _showEdit = () => {
    this.setState({edit: true})
  }

  _hideEdit = () => {
    this.setState({edit: false})
  }

  _update = (formValues: postType, postId: number) => {
    const {updatePost, post} = this.props
    const postIdentityUserId = post.post_identity.identity_user && post.post_identity.identity_user.id
    const postIdentityOrganId = post.post_identity.identity_organization && post.post_identity.identity_organization.id
    const postOwnerId = postIdentityUserId || postIdentityOrganId
    updatePost({formValues, postId, postOwnerId})
  }

  _delete = () => {
    const {deletePost, post} = this.props
    const postParent = post.post_parent
    const postIdentityUserId = post.post_identity.identity_user && post.post_identity.identity_user.id
    const postIdentityOrganId = post.post_identity.identity_organization && post.post_identity.identity_organization.id
    const postParentType = (postParent && postParent.child_name) || null
    const postParentId = (postParent && postParent.id) || null
    const postOwnerId = postIdentityUserId || postIdentityOrganId
    const postOwnerType = postIdentityUserId ? constants.USER_TYPES.PERSON : constants.USER_TYPES.ORG
    deletePost({postId:post.id, postOwnerId, postOwnerType, postParentId, postParentType})
  }

  render() {
    const {edit} = this.state
    const {profileMedia, post} = this.props
    return (
      // TODO mohsen: handle error and isLoading from state redux
        <VerifyWrapper isLoading={false} error={false}>
          {edit ?
              <div className="-itemWrapperPost">
                <PostEditForm
                    post={post}
                    hideEdit={this._hideEdit}
                    deleteFunc={this._delete}
                    updateFunc={this._update}
                />
              </div>
              :
              <PostView post={post}
                        showEdit={this._showEdit}
                        profileMedia={profileMedia}
              />
          }
        </VerifyWrapper>
    )
  }
}