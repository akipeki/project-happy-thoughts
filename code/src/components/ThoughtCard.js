/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './ThoughtCard.css';

const ThoughtCard = ({ loading, thoughtsList, onHeartButtonClick }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>
  }

  return (
    <section className="thoughts-section">
      {thoughtsList.map((thought) => (
        <div key={thought._id} className="box thought-box">
          <h4 className="posted-thought">{thought.message}</h4>
          <button
            type="button"
            className={thought.hearts === 0 ? 'no-likes-button' : 'like-button'}
            onClick={() => onHeartButtonClick(thought._id)}>
            <FontAwesomeIcon
              icon={faHeart}
              style={{
                color: '#ffffff',
                opacity: thought.hearts === 0 ? 0.6 : 1,
                background: 'transparent'
              }} />
          </button>

          <p className="likes-count">x {thought.hearts}</p>
          <p className="posted-time">
            {formatDistanceToNow(new Date(thought.createdAt), Date.now(), {
              addSuffix: true
            })}
          </p>
        </div>
      ))}
    </section>
  );
}

export default ThoughtCard;