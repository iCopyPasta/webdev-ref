import { useEffect } from 'react';
import { useFetcher } from 'react-router-dom';
import classes from './NewsletterSignup.module.css';

function NewsletterSignup() {

  // used whenever you want to trigger an action or loader
  // without navigating to the page to which the action/loader belongs
  const fetcher = useFetcher();
  // send request behind the scenes w/o triggering any route changes
  const { data, state } = fetcher;

  useEffect(()=>{
    if (state === 'idle' && data && data.message){
      window.alert(data.message);
    }

    // could clear if requried
  }, [data, state]);

  return (
    <fetcher.Form 
      method="POST"
      action="/newsletter"
      className={classes.newsletter}
      >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;