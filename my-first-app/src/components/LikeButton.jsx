import React from 'react'
import  { useState } from 'react';

 function LikeButton({ initialCount = 99 }) {
  const [isLiked, setIsLiked] = useState(false);
  
  const [count, setCount] = useState(initialCount);

  const handleToggle = () => {
    setIsLiked((prev) => !prev);
    setCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-pressed={isLiked}
      className={`
        group relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold
        transition-all duration-200 ease-in-out select-none
        focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2
        active:scale-95
       ${
          {/*isLiked
            ? 'bg-rose-100 text-rose-600 dark:bg-rose-950/50 dark:text-rose-400 dark:ring-1 dark:ring-rose-800'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'*/}
        }
      `}
    >
      {/* Heart Icon with Pop Effect */}
      <span
        className={`
          inline-block transform transition-transform duration-200 ease-out
          group-hover:scale-110
          ${isLiked ? 'scale-125' : 'scale-100'}
        `}
      >
        {isLiked ? '❤️' : '🤍'}
      </span>

      {/* Label Text */}
      <span>{isLiked ? 'Liked' : 'Like'}</span>

      {/* Counter Pill */}
      <span
        className={`
          ml-0.5 rounded-full px-2 py-0.5 text-xs font-bold transition-colors
          ${
            isLiked
              ? 'bg-rose-200 text-rose-700 dark:bg-rose-900 dark:text-rose-300'
              : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
          }
        `}
      >
        {count}
      </span>
    </button>
  );
}

export default LikeButton;