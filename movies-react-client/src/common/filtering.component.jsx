import React from 'react';

const Filter = ({ filteredItems, onClick, selectedItem }) => {
  return (
    <ul class="list-group">
      {
        filteredItems.map(item => (
            <li
              onClick={() => onClick(item.name)}
              key={item._id}
              className={selectedItem === item.name ? "list-group-item active" : "list-group-item"}
              style={{ cursor: "pointer" }}
            >
            {item.name}
          </li>
        ))
      }

    </ul>
  );
}
export default Filter;