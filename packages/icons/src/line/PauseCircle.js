import React from 'react';

export default function PauseCircle(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} {...props}>
      <path d="M10,7A1,1,0,0,0,9,8v8a1,1,0,0,0,2,0V8A1,1,0,0,0,10,7Zm2-5A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14,7a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V8A1,1,0,0,0,14,7Z" />
    </svg>
  );
}
