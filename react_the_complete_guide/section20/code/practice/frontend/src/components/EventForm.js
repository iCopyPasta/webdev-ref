import { Form, useNavigate, useNavigation, useActionData } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {

  // in case of validation errors
  const data = useActionData();

  const navigate = useNavigate()
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';
  
  function cancelHandler() {
    navigate('...');
  }

  // note: React Router makes handling form submissions
  // helps w/ data extraction
  //   all inputs have 'name' attribute
  //   replace form w/ Form component
  return (
    // will not be sent to backend, will be sent to React Router if using special component
    <Form method={method} className={classes.form}>
      {data && data.errors && <ul>
        {Object.values(data.errors).map( err => <li key={err}>{err}</li>)}
      </ul>
      }
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event ? event.title : ''}/>
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event ? event.image : ''}/>
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event ? event.date : ''} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event ? event.description : ''}/>
      </p>
      <div className={classes.actions}>
        <button 
          type="button" 
          onClick={cancelHandler}
          disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Save'}</button>
      </div>
    </Form>
  );
}

export default EventForm;
