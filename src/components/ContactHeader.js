import React from 'react';
import { connect } from 'react-redux';
import { togglePage} from '../actions.js';
import '../styles/header.scss';


class ContactHeader extends React.Component {
    switchPage = () => {
      this.props.dispatch(togglePage());
    }
    render() {
        let header;
        if(this.props.isContactPage){
            header = <span className="header__title">My Contacts</span>
        }
        else{
            header = <span className="header__title">People</span>
        }    
        return (
            <div className="header">
                  {header}
                  <input type="checkbox" id="switch" className="header__switch-input"  onChange={this.props.switchPage}/>
                  <label className="header__switch-label"  htmlFor="switch">Toggle</label>
                  
            </div> 
        );
      } 
}

function mapStateToProps (state) {
    return {
        isContactPage: state.isContactPage,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        switchPage: () => dispatch(togglePage()),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ContactHeader);