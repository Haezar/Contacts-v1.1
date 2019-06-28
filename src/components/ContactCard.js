import React, { Component } from 'react';
import { moveUser } from '../actions.js';

import '../styles/card.scss';



class ContactCard extends Component {
  swapUser = (userId) => {
    this.props.dispatch(moveUser(userId))
  }
  render() {
    return (
      <div className='card'>

        <div className="card__image">
         {this.props.photo && <img srr={this.props.photo}></img>}
         {this.props != null && 
          <svg width="88" height="94" viewBox="0 0 88 94" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 9.54586C0 4.27382 4.25935 0 9.51351 0H78.4865C83.7407 0 88 4.27383 88 9.54587V85.5457C88 89.216 85.9355 92.4026 82.9082 94C82.3321 72.935 65.1328 56.0361 44 56.0361C22.8672 56.0361 5.66791 72.935 5.09183 94C2.06447 92.4026 0 89.216 0 85.5456V9.54586ZM44 52.2154C53.1127 52.2154 60.5 44.803 60.5 35.6593C60.5 26.5156 53.1127 19.1032 44 19.1032C34.8873 19.1032 27.5 26.5156 27.5 35.6593C27.5 44.803 34.8873 52.2154 44 52.2154Z" fill="#CFCFCF"/>
          </svg>}
          
        </div>

        <div className="card__information">
          <div className="card__information-user-general">
            <span className="card__information-user-name">{this.props.firstName + " " + this.props.lastName }</span>
            <span className={"card__information-user-status_"+this.props.status}>
              <svg className='card__information-user-svg' width="15" height="15" viewBox="0 0 120 120" version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="40"/>
              </svg> 
              <span className="card__information-user-status-text">{this.props.status}</span>
            </span>
          </div>
          <div className="card__information-main-line">
            <small>from: {this.props.country + ", "+ this.props.job + ", "+ this.props.years+ ' y.o., '+ this.props.hobby}   </small>
          </div>
          <div className="card__information-line">
            Native language: {this.props.nativeLanguage}
          </div>
          <div className="card__information-line">
            Studied language: {this.props.studiedLanguages.join(',')}
            </div>
          <div className="card__information-line">
            Intro: {this.props.intro}
          </div>
        </div>

        <div className="card__controls">
            {this.props.isContact && 
              <button  className="card__button" onClick={() => this.swapUser(this.props.userId)}>
                <svg width="15" height="12" viewBox="0 0 15 12" fill="steelblue" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.40894 8.96241C5.01184 9.40227 4.3215 9.40227 3.9244 8.96241L1.80945 6.6197C1.46558 6.23879 0.867756 6.23879 0.523878 6.6197C0.22629 6.94934 0.22629 7.45066 0.523878 7.7803L3.9244 11.547C4.3215 11.9869 5.01184 11.9869 5.40893 11.547L14.1428 1.8726C14.4404 1.54297 14.4404 1.04165 14.1428 0.712012C13.7989 0.331101 13.2011 0.3311 12.8572 0.712012L5.40894 8.96241Z" fill="#003469" />
                </svg> CONTACTS
              </button>
            }
            {!this.props.isContact && 
              <button  className="card__button card__button--filled" onClick={() => this.swapUser(this.props.userId)}>
                ADD TO CONTACTS
              </button>
            }
        </div>
      </div>
    );
  }
}
export default ContactCard;