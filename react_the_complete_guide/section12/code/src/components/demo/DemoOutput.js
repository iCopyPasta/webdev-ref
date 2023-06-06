import React from 'react';

import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
    console.log("DemoOutput RUNNING");
    return(
      <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>
    );
}

// memoization only applies functional components
// React should look at props and check if new value for all props
// and compare to previous, only if it changed, then re-evaluate
// if parent changed, but not props to this, then execution will be skipped
export default React.memo(DemoOutput);