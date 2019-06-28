import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moveUser } from '../../actions.js';
import CardInfo from './CardInfo.js';
import CardPhoto from './CardPhoto.js';
import CardButtons from './CardButtons.js';
import '../../styles/card.scss'

class ContactCard extends Component {
  swapUser = (userId) => {
    this.props.dispatch(moveUser(userId))
  }
  render() {
    return (
      <div className='card'>

        <CardPhoto photo={this.props.photo}></CardPhoto>
        <CardInfo firstName={this.props.firstName}
                  lastName={this.props.lastName}
                  status={this.props.status}
                  country={this.props.country}
                  job={this.props.job}
                  years={this.props.years}
                  hobby={this.props.hobby}
                  nativeLanguage={this.props.nativeLanguage}
                  studiedLanguages={this.props.studiedLanguages}
                  intro={this.props.intro}>
        </CardInfo>
        <CardButtons
                  userId={this.props.userId}
                  isContact={this.props.isContact}
        ></CardButtons>

      </div>
    );
  }
}

export default connect()(ContactCard);
