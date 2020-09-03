import React from 'react';
import { ExperienceType, Item3d } from '../../types';
import { useStore } from '../../store/store';

function Info(): JSX.Element {
  const content = useStore((state) => state.content);
  const setContent = useStore((state) => state.setContent);
  const generateTemplate = (item: Item3d) => {
    let template;
    switch (item.type) {
      case ExperienceType.Experience:
        template = (
          <div className="item__experience">
            <p className="item__type">{`${item.type}:`}</p>
            <p>{item.fromTo}</p>
            <h2>{item.company.toUpperCase()}</h2>
            <p>{`${item.jobtitle}, ${item.where}`}</p>
            <button
              className="item__close"
              type="button"
              onClick={() => setContent(null)}
            >
              close
            </button>
          </div>
        );
        break;

      case ExperienceType.Education:
        template = (
          <div className="item__education">
            <p className="item__type">{`${item.type}:`}</p>
            <p>{item.fromTo}</p>
            <h2>{item.title}</h2>
            <p>{item.school}</p>
            <button
              className="item__close"
              type="button"
              onClick={() => setContent(null)}
            >
              close
            </button>
          </div>
        );
        break;

      case ExperienceType.Project:
        template = (
          <div className="item__project">
            <p className="item__type">{`${item.type}:`}</p>
            <p>{item.for}</p>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <ul>
              {item.about.map((li) => {
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
              onClick={() => setContent(null)}
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
  };
  return <>{content ? generateTemplate(content) : null}</>;
}

export default Info;
