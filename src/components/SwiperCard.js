import React, { useCallback, useState } from 'react';

const TRIGGER_POINT = 100;

const SwiperCard = ({
  metadata,
  image,
  onClick,
  onSwipeLeft,
  onSwipeRight,
  title,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartPosition, setDragStartPosition] = useState();
  const [currentDragPosition, setCurrentDragPosition] = useState(0);

  const onTouchStart = useCallback((e) => {
    setDragStartPosition(e.touches[0].clientX);
    setIsDragging(true);
  }, []);

  const onTouchMove = useCallback((e) => {
    if (!isDragging) return;
    setCurrentDragPosition(e.touches[0].clientX - dragStartPosition);
  }, [isDragging, dragStartPosition]);

  const onTouchEnd = useCallback(() => {
    setIsDragging(false);

    if (Math.abs(currentDragPosition) === 0) {
      onClick && onClick();
    }

    if (currentDragPosition < -TRIGGER_POINT) {
      onSwipeLeft && onSwipeLeft();
    } else if (currentDragPosition > TRIGGER_POINT) {
      onSwipeRight && onSwipeRight();
    }
    
    setCurrentDragPosition(0);
  }, [currentDragPosition, onSwipeLeft, onSwipeRight]);

  const style = {
    backgroundImage: `
      linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.3) 100%),
      url("${image}")
    `,
    transform: `
      translate(${currentDragPosition / 10}px, -${Math.abs(currentDragPosition) / 5}px)
      rotate(${currentDragPosition / 10}deg)
    `,
    transition: isDragging ? '' : 'transform 100ms ease-out',
  };

  const showDelete = currentDragPosition < -TRIGGER_POINT;
  const showSave = currentDragPosition > TRIGGER_POINT;

  return (
    <>
      <article
        className="card"
        onTouchEnd={onTouchEnd}
        onTouchMove={onTouchMove}
        onTouchStart={onTouchStart}
        style={style}
      >
        <div className="card__content">
          <h3 className="card__title">
            { title }
          </h3>
          <p className="card__details">
            { metadata }
          </p>
        </div>
      </article>
      <div className={`card__action card__action--delete ${showDelete ? 'card__action--active' : null}`}>
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M69.2 30.8L30.8 69.2" stroke="#ff6660" stroke-width="4.8" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M30.8 30.8L69.2 69.2" stroke="#ff6660" stroke-width="4.8" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="50" cy="50" r="48" stroke="#ff6660" stroke-width="4"/>
        </svg>
      </div>
      <div className={`card__action card__action--save ${showSave ? 'card__action--active' : null}`}>
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M66.8 71.6L50 59.6L33.2 71.6V33.2C33.2 31.927 33.7057 30.7061 34.6059 29.8059C35.5061 28.9057 36.727 28.4 38 28.4H62C63.273 28.4 64.4939 28.9057 65.3941 29.8059C66.2943 30.7061 66.8 31.927 66.8 33.2V71.6Z" stroke="#44c7a7" stroke-width="3.42857" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="50" cy="50" r="48" stroke="#44c7a7" stroke-width="4"/>
        </svg>
      </div>
    </>
  );
}

export default SwiperCard;