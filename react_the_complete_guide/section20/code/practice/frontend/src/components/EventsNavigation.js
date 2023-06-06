import { NavLink } from 'react-router-dom';

import classes from './EventsNavigation.module.css';

const isActiveFunc = ({isActive}) => {
  return isActive ? classes.active : undefined;
};

function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink 
              to="/events"
              className={isActiveFunc}
              end>All Events</NavLink>
          </li>
          <li>
            <NavLink 
              to="/events/new"
              className={isActiveFunc}>New Event</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
