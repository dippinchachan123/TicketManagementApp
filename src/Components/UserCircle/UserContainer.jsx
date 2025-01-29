import React from 'react';
import './UserCircle.scss'; // Import your CSS file

function stringToColor(str) {
  // Simple hash function to convert a string into a color
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const c = (hash & 0x00ffffff).toString(16).toUpperCase();
  return '#' + '00000'.substring(0, 6 - c.length) + c;
}

function getContrastColor(hexColor) {
  // Function to determine whether to use white or black text based on background color
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  return brightness > 128 ? '#000' : '#fff';
}

const UserCircle = ({ name, status }) => {
  const userColor = stringToColor(name);
  const textColor = getContrastColor(userColor);

  return (
    <div
      className={`user-circle ${status === 'active' ? 'active' : 'inactive'}`}
      style={{ backgroundColor: `${userColor}80`, color: textColor }}
    >
      <div className="initials">
        {name
          .split(' ')
          .map(word => word[0].toUpperCase())
          .join('')}
      </div>
      {<div className={`status-dot ${status}-dot`}></div>}
    </div>
  );
};

export default UserCircle;
