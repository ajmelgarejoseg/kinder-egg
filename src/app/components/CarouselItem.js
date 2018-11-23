import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "./CarouselItem.scss";


const CarouselItem = ({item}) => {
  return (
    <div className="item-wrapper">
      <div className="score center">
        {item.liveData.score ?
          <span>{item.liveData.score.home} - {item.liveData.score.away}</span>
          :
          <span>-</span>
        }
      </div>
      <div className="event-name center">
        <div className={`icon ${item.event.sport}`}></div>
        <span>{item.event.name}</span>
      </div>
      <div className="date center">
        <span>{isToday(item.event.start) ? 'Today' : moment(item.event.start).format('YYYY-MM-DD')}</span>
        <span>, {moment(item.event.start).format('HH:mm')}</span>
      </div>
      <div className="bet-button center">
        <button onClick={() => window.open(`https://www.unibet.com/betting#/event/live/${item.event.id}`, '_blank')}>Place a
          bet
        </button>
      </div>
    </div>
  )
};


const isToday = (date) => (
  !moment().diff(moment(date), 'days')
);

CarouselItem.propTypes = {
  item: PropTypes.object,
};

export default CarouselItem;
