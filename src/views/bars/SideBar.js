import React,{Component} from 'react';
import PropTypes from 'prop-types';

export class Sidebar extends Component {

	render() {

			const {children} = this.props;
			// TODO keep ltr and uncomment components
			return(
				<div className="right-sidebar-wrapper">
					<div className="align-items-center">
						<div className="col text-center">
								<div className="mt-4 mb-4">
									<div style={{padding:10}}>
										{children}
									</div>
								</div>
						</div>
					</div>
				</div>
			)
	}
}

export default Sidebar;


//
// import React, {Component} from 'react';
// import PropTypes from 'prop-types';
//
// export class OrganizationSideView extends Component {
//
//   static propTypes = {
//     organization: PropTypes.object.isRequired,
//   };
//
//   render() {
//     const {organization} = this.props;
//     // TODO keep ltr and uncomment components
//     return (
//       <div className="col mt-4 text-center">
//         {/* <img alt="" src={organization.logo.url} style={{maxWidth:100}}/>
// 					<h6 style={{padding:20}}>شرکت :{organization.nikeName || "نام شرکت"}</h6>
// 					<h6 style={{padding:5,fontWeight:0,fontSize:13}}>{organization.officialName}</h6>
// 					<h6 style={{padding:5,fontWeight:0,fontSize:13}}>{organization.description}</h6> */}
//         <div className="row" style={{marginTop: 30}}>
//           <div className="col">
//             <button type="button" style={{fontFamily: 'IRANSans', borderColor: '#606060', color: '#606060'}}
//                     className="btn btn-outline-secondary btn-block">دنبال کردن
//             </button>
//           </div>
//           <div className="col">
//             <button type="button" style={{fontFamily: 'IRANSans', borderColor: '#606060', color: '#606060'}}
//                     className="btn btn-outline-secondary btn-block">ارسال پیام
//             </button>
//           </div>
//         </div>
//       </div>
//     )
//
//   }
// }
//
//
// export class Sidebar extends Component {
//   render() {
//     return (
//       <OrganizationSideView {...this.props}/>
//     )
//   }
// }
//
//
// export default Sidebar;