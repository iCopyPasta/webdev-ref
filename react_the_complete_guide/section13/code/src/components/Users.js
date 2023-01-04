import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];


// in classes
//   define initial
//   update when needed
class Users extends Component {

  // represents initial state
  constructor() {
    super();
    // state always is an object
    // "state" is the property name, not optional
    this.state = {
      showUsers:true,
      moreState: 'Test',
      nested: {},
      myList: []
    };

  }

  // -----------------------------------------
  // group together functionality in class
  // -----------------------------------------
  toggleUsersHandler() {
    // this.state.showUsers = false; // NOT!
    // use setState - expects object
    // contains new state, won't override - will merge for you
    this.setState( (curState) => {
      return ({ showUsers: !curState.showUsers });
    });
  }

  render() {
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );

  };
}


// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
