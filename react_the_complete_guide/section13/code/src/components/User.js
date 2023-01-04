import { Component } from 'react';
import classes from './User.module.css';

// User gets "props" property from extending Component
class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
};

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
