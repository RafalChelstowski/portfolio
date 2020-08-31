/* eslint-disable react/jsx-curly-newline */
import React from 'react';
import { Item3d, ExperienceType } from '../../types';

interface Props {
  isSortingActive: boolean;
  toggleIsSortingActive: () => void;
  closeContent: () => void;
  content: Item3d | null;
}

function UserInterface({
  isSortingActive,
  toggleIsSortingActive,
  closeContent,
  content,
}: Props): JSX.Element {
  function dataTemplate() {
    let template;
    if (content === null) {
      return null;
    }
    switch (content.type) {
      case ExperienceType.Experience:
        template = (
          <div className="item__experience">
            <p className="item__type">{`${content.type}:`}</p>
            <p>{content.fromTo}</p>
            <h2>{content.company.toUpperCase()}</h2>
            <p>{`${content.jobtitle}, ${content.where}`}</p>
            <button
              className="item__close"
              type="button"
              onClick={() => closeContent()}
            >
              close
            </button>
          </div>
        );
        break;

      case ExperienceType.Education:
        template = (
          <div className="item__education">
            <p className="item__type">{`${content.type}:`}</p>
            <p>{content.fromTo}</p>
            <h2>{content.title}</h2>
            <p>{content.school}</p>
            <button
              className="item__close"
              type="button"
              onClick={() => closeContent()}
            >
              close
            </button>
          </div>
        );
        break;

      case ExperienceType.Project:
        template = (
          <div className="item__project">
            <p className="item__type">{`${content.type}:`}</p>
            <p>{content.for}</p>
            <h2>{content.name}</h2>
            <p>{content.description}</p>
            <ul>
              {content.about.map((li) => {
                return (
                  <li className="item__listitem" key={li}>
                    <p>{li}</p>
                  </li>
                );
              })}
            </ul>
            <button
              className="item__close"
              type="button"
              onClick={() => closeContent()}
            >
              close
            </button>
          </div>
        );
        break;

      default:
        template = <div>no template for this type</div>;
        break;
    }
    return template;
  }

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
        <div className="item__html">{dataTemplate()}</div>
      </div>
    </>
  );
}

export default UserInterface;
