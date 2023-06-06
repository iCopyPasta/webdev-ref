//import { Fragment, useState, useEffect, Component } from 'react';
import { Fragment, Component } from 'react';


import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBoundary';

class UserFinder extends Component {

    // can only be set once
    static contextType = UsersContext;

    constructor() {
        super();
        this.state = {
            filteredUsers: [],
            searchTerm: ''
        };
    };

    searchChangeHandler(event) {
        this.setState({searchTerm: event.target.value});
    };

    // called automatically when re-eval'd
    componentDidUpdate(prevProps, prevState) {
        // otherwise would be an infinite loop
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({filteredUsers: this.context.users.filter((user) => 
                user.name.includes(this.state.searchTerm))});
        };
    };

    // will only run once
    componentDidMount() {
        // Send HTTP request ...
        this.setState({filteredUsers: this.context.users});
    }

    render() {
        return (
            <Fragment>
                <div className={classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)} />            
                </div>
                <ErrorBoundary>
                    <Users users={this.state.filteredUsers} />
                </ErrorBoundary>
            </Fragment>
          );
    };
};

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

  
// };

export default UserFinder;