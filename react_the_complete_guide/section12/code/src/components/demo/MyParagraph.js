import React from 'react';

const MyParagraph = (props) => {
    console.log("MyParagraphy RUNNING");
    return(
      <p>{props.children}</p>
    );
}

export default MyParagraph;