import React from 'react';

class CardInfo extends React.Component {
    render() {
        return (
            <div className="card__information">
                <div className="information-general">
                    <span className="information-name">{this.props.firstName + " " + this.props.lastName }</span>
                    <span className={"information-status--"+this.props.status}>
                    <svg className='information-svg' width="15" height="15" viewBox="0 0 120 120" version="1.1"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle cx="60" cy="60" r="40"/>
                    </svg> 
                    <span className="information-status-text">{this.props.status}</span>
                    </span>
                </div>
                <div className="information-main-line">
                    <small>from: {this.props.country + ", "+ this.props.job + ", "+ this.props.years+ ' y.o., '+ this.props.hobby}   </small>
                </div>
                <div className="information-line">
                    Native language: {this.props.nativeLanguage}
                </div>
                <div className="information-line">
                    Studied language: {this.props.studiedLanguages.join(',')}
                    </div>
                <div className="information-line">
                    Intro: {this.props.intro}
                </div>
            </div>
        )
    }
}

export default CardInfo;