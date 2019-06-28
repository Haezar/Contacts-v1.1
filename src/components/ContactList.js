import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactCard from './ContactCard/ContactCard';

class ContactList extends Component {
    render() {
        let visibleUsers = [];
        this.props.users.forEach(item => {
            if (this.props.isContactPage === item.isContact){
                visibleUsers.push(item);
            }
        });        
        return (
            <div className="contact-list">
                {
                    visibleUsers.map(item => {
                        return <ContactCard 
                            key={item.id}
                            userId={item.id}
                            isContact={item.isContact}
                            firstName={item.firstName}
                            lastName={item.lastName}
                            status={item.status}
                            country={item.country}
                            years={item.years}
                            job={item.job}
                            hobby={item.hobby}
                            nativeLanguage={item.nativeLanguage}
                            studiedLanguages={item.studiedLanguages}
                            intro={item.intro}
                            dispatch={this.props.dispatch}
                            photo={this.props.photo}> 
                        </ContactCard>
                    })
                }
            </div>
        );
      } 
}
const mapStateToProps = (state) => {
    return {
        isContactPage: state.isContactPage,
        users: state.users
    }
}

export default connect(mapStateToProps)(ContactList);