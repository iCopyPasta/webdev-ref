import { useRouter } from "next/router";

import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {

  // Link would be better, but example is for showing programmatic navigation
  const router = useRouter();

  const showDetailsHandler = () => {
    // pushes a page onto the Stack
    // equivalent to <Link>
    router.push("/" + props.id);
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
