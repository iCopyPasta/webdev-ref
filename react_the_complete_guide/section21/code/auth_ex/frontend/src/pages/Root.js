import { useEffect } from 'react';
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { getTokenDuration } from '../utils/auth';

function RootLayout() {
  // const navigation = useNavigation();
  const token = useLoaderData();

  const submit = useSubmit();

  // flaw: application is reloaded, can extend
  useEffect(() => {
    if(!token){
      return;
    }

    if (token === "EXPIRED"){
      submit(null, {action: "/logout", method: "POST"});
      return;
    }

    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);
    
    setTimeout(()=>{
      submit(null, {action: "/logout", method: "POST"});
    }, tokenDuration);

  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
