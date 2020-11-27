import React, { useState } from 'react';
import { classNames } from '../utils';

const TRIGGER_POINT = 60;

const SavedArticle = ({
  image,
  metadata,
  onDelete,
  title,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartPosition, setDragStartPosition] = useState();
  const [currentDragPosition, setCurrentDragPosition] = useState(0);

  function onTouchStart(e) {
    setDragStartPosition(e.touches[0].clientX);
    setIsDragging(true);
  }

  function onTouchMove(e) {
    if (!isDragging) return;
    setCurrentDragPosition(e.touches[0].clientX - dragStartPosition);
  }

  function onTouchEnd() {
    setIsDragging(false);

    if (currentDragPosition < -TRIGGER_POINT) {
      onDelete && onDelete();
    }
    
    setCurrentDragPosition(0);
  }

  const style = {
    transform: `translateX(${currentDragPosition}px)`,
    transition: isDragging ? '' : 'transform 100ms ease-out',
  };

  return (
    <article
      className={classNames('saved-article', { 'saved-article--swiping': Math.abs(currentDragPosition) > 0 })}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="saved-article__content" style={style}>
        <img className="saved-article__image" src={image} />
        <div>
          <h3 className="saved-article__category">Category</h3>
          <h2 className="saved-article__title">{ title }</h2>
          <p className="saved-article__metadata">{ metadata }</p>
        </div>
      </div>
      <svg
        className={classNames('saved-article__delete', { 'saved-article__delete--active': currentDragPosition < -TRIGGER_POINT})}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18 2L2 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 2L18 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </article>
  )
};

export default SavedArticle;