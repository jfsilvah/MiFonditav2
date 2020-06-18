import React from 'react';
import { Link} from 'react-router-dom';
import { withFirebase } from '../Firebase';
const SignOutButton = ({ firebase }) => (
  <a href="/login" className="light-blue darken-1 waves-effect waves-light btn" type="button" onClick={firebase.doSignOut}>
    Sign Out
  </a>
);
export default withFirebase(SignOutButton);