import React from 'react';
import { connect } from 'react-redux';
import { moveUser } from '../../actions.js';

class CardButtons extends React.Component {
    render() {
        return (
            <div className="card__controls">
                {this.props.isContact && 
                <button  className="card__button" onClick={() => this.props.swapUser(this.props.userId)}>
                    <svg width="15" height="12" viewBox="0 0 15 12" fill="steelblue" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.40894 8.96241C5.01184 9.40227 4.3215 9.40227 3.9244 8.96241L1.80945 6.6197C1.46558 6.23879 0.867756 6.23879 0.523878 6.6197C0.22629 6.94934 0.22629 7.45066 0.523878 7.7803L3.9244 11.547C4.3215 11.9869 5.01184 11.9869 5.40893 11.547L14.1428 1.8726C14.4404 1.54297 14.4404 1.04165 14.1428 0.712012C13.7989 0.331101 13.2011 0.3311 12.8572 0.712012L5.40894 8.96241Z" fill="#003469" />
                    </svg> CONTACTS
                </button>
                }
                {!this.props.isContact && 
                <button  className="card__button card__button--filled" onClick={() => this.props.swapUser(this.props.userId)}>
                    ADD TO CONTACTS
                </button>
                }
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        swapUser: (userId) => dispatch(moveUser(userId)),
    }
}
export default connect(null,mapDispatchToProps)(CardButtons);