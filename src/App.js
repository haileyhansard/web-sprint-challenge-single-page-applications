import React from "react";
import { Route, Link } from "react-router-dom"

const App = () => {
  return (
    <div>
      <nav>
        <h1 className='store-header'>Lambda Eats</h1>
        <div className='nav-links'>
          {/* 👉 STEP 3 - Make Links to navigate us Home (`/`) and Shop (`/items-list`) */}
          {/* <Link to='/'>Home</Link>
          <Link to='/xxx'>Help</Link> */}
        </div>
      </nav>
      <h1>Lambda Eats</h1>
      <p>Your favorite food delivery while coding</p>

    </div>
  );
};
export default App;
