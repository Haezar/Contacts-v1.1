import React  from 'react';

class CardPhoto extends React.Component {
    render() {
        return (
            <div className="card__image">
                {this.props.photo && <img srr={this.props.photo}></img>}
                {this.props != null && 
                <svg width="88" height="94" viewBox="0 0 88 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 9.54586C0 4.27382 4.25935 0 9.51351 0H78.4865C83.7407 0 88 4.27383 88 9.54587V85.5457C88 89.216 85.9355 92.4026 82.9082 94C82.3321 72.935 65.1328 56.0361 44 56.0361C22.8672 56.0361 5.66791 72.935 5.09183 94C2.06447 92.4026 0 89.216 0 85.5456V9.54586ZM44 52.2154C53.1127 52.2154 60.5 44.803 60.5 35.6593C60.5 26.5156 53.1127 19.1032 44 19.1032C34.8873 19.1032 27.5 26.5156 27.5 35.6593C27.5 44.803 34.8873 52.2154 44 52.2154Z" fill="#CFCFCF"/>
                </svg>}
            
            </div>
        )
    }
}

export default CardPhoto;