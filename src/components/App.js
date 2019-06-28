import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/contacts-body.scss';


import ContactList from './ContactList';
import ContactHeader from './ContactHeader';

class App extends Component {
  render() { 
    return (
      <div className="contacts-body">
        <ContactHeader></ContactHeader>
        <ContactList></ContactList>
      </div>
    ) 
  }
}

export default connect()(App);
