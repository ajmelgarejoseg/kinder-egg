import React from "react";
import PropTypes from "prop-types";
import "./Home.scss";


const Home = ({children}) => {
  return (

    <div className="home-wrapper">
      <div className="center-wrapper">
        <header>
          <div className="logo" />
        </header>
        <nav>
          <ul>
            <li><a href="#">Test instructions</a></li>
          </ul>
        </nav>
        <div className="results">
          <h1>Live matches</h1>
          <h3>Here is a list of matches that are living right now</h3>
          <div className="results-info">
            <div className="carousel">
              {children}
            </div>
            <div className="info-bet">
              <h2>Live betting</h2>
              <p>Place your bets as the action unfolds. We offer a wide selection of live betting events and you can place both single and combination bets.</p>
              <p>You will be able to see an in-play scoreboard with the current result and match stats, while on selected events you will also be able to watch the action live with Unibet TV on the desktop site.</p>
            </div>
          </div>
        </div>
      <footer>
        <div className="inner">
          <p>&copy; 1997-2015, Unibet. All rights reserved.</p>
        </div>
      </footer>
      </div>

    </div>

  )
};

// const isToday = (date) => (
//   !moment().diff(moment(date), 'days')
// );

Home.propTypes = {
  children: PropTypes.object,
};

export default Home;
