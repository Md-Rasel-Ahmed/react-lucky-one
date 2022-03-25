import React from "react";
import "./react-work.css";

const ReactWork = () => {
  return (
    <div className="react-concept">
      <div className="state-and-props">
        <h2>Whats the difference between state and props?</h2>
        <p>
          Props are used to send data and envent handlers to a components
          children
          <b>And State</b>The data of the components that must be presented to
          id store the view in the state
        </p>
        <p>
          Props are immutable they can,t be modified after they have been set
          <b>and state</b> The data is stored in the state,Whice might change
          over time
        </p>
        <p>
          The parent components sets props for the childrencomponents
          <b>and state</b>Event handlers are typically responsible for updating
          the state
        </p>
      </div>
      <div className="useState">
        <h2>How to use State work?</h2>
        <p>
          useState is an object that stored properties values for those
          attributes to a component that coud change over some time
        </p>
        <p>
          A state can be changed as a result of a user,s action or change in
          network
        </p>
        <p>
          React re-render the component to the browser whenever the state of an
          object changes
        </p>
        <p>Multiple properties can be stored in the state object</p>
      </div>
      <div className="how-to-react-work">
        <h2>How to React Work?</h2>
        <p>
          React uses Virtual DOM.Thereby creating web applications
          faster.Virtual DOM compares the components previous state and updates
          only the items in the Real DOM that were changeed,instead of updating
          all of the components again,as conventional web applications do.The
          Virtual DOM is React's lighweight version of the Real DOM'
        </p>
      </div>
    </div>
  );
};

export default ReactWork;
