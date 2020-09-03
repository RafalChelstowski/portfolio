/* eslint-disable react/jsx-curly-newline */
import React from 'react';

interface Props {
  isSortingActive: boolean;
  toggleIsSortingActive: () => void;
}

function UserInterface({
  isSortingActive,
  toggleIsSortingActive,
}: Props): JSX.Element {
  return (
    <>
      <div className="user-interface">
        <p className="user-interface__intro">THIS IS WORK IN PROGRESS, SORRY</p>
        <ul>
          <li>
            <span
              className="user-interface__sort"
              onMouseEnter={() =>
                isSortingActive
                  ? () => {
                      return false;
                    }
                  : toggleIsSortingActive()
              }
              onMouseLeave={() =>
                isSortingActive
                  ? toggleIsSortingActive()
                  : () => {
                      return false;
                    }
              }
            >
              Sort
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default UserInterface;
