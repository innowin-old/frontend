/*global __*/
import React, { Component } from 'react'
import PropTypes from "prop-types"
import FontAwesome from 'react-fontawesome'
import RadioButtonInput from '../../common/inputs/RadioButtonInput'
import LabelTag from '../../common/tag-label.js'
class AgentForm extends Component {
  static propTypes = {
    hide: PropTypes.func.isRequired,
    active: PropTypes.boolean.isRequired
  }
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.hide();
    }
  }
  render() {
    return (
      <div className="modal-page" tabindex="-1" role="dialog">
        <p><i className="fa fa-home"/> درخواست ارتقاء به کارگزار</p>
        <div className="modal-hint">
          <div className="row">
            <div className="col-2">
              <i className="fa fa-home hint-icon" style={{fontSize:"22px"}}/>
            </div>
            <div className="col-10">
              <p>درخواست ارتقا درخواست ارتقا درخواست ارتقادرخواست ارتقادرخواست ارتقادرخواست ارتقادرخواست ارتقادرخواست ارتقادرخواست ارتقادرخواست ارتقادرخواست ارتقادرخواست ارتقا</p>
            </div>
          </div>
        </div>
        <div className="modal-options">
          <div className="row">
            <div className="col" dir="ltr">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                <label className="form-check-label" for="inlineRadio1">ارتقا مستقیم به کارگزار</label>
              </div>
            </div>
            <div className="col" dir="ltr">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                <label className="form-check-label" for="inlineRadio1">ارتقا بر اساس سوابق کارگزاری</label>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-bottom">
          <label className="label float-right">هدف شما از ارتقا به کارگزار چیست؟</label>
          <input type="text " className="form-control"/>

          <label className="label float-right">ویرایش برچسب ها</label>
          <input type="text " className="form-control"/>
          <div className="modal-labels">
            <LabelTag
              name="تست"
              number="2"
            />
            <LabelTag
              name="تست"
              number="2"
            />
            <LabelTag
              name="تست"
              number="2"
            />
          </div>
          
        </div>
        <div className="modal-footers">
          <div className = "row">
            <div className="col">
              <button className="modal-button link float-right">
                لغو
              </button>
            </div>
            <div className="col">
              <button className="modal-button primary float-left">
                ارسال
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
export default AgentForm