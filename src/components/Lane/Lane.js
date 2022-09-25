import './Lane.css';
import { Project } from '../Project/Project';

export const Lane = ({ laneId, title, loading, error, projects, onDragStart, onDragOver, onDrop }) => {
  return (
    <div className='lane-wrapper' onDragOver={onDragOver} onDrop={(e) => onDrop(e, laneId)}>
      <h2>{title}</h2>
      {
        loading
          ||
          error
          ?
          (
            <span>
              {
                error
                ||
                'Loading...'
              }
            </span>
          )
          :
          (
            projects.map((element) => (
              <Project
                key={element.id}
                id={element.id}
                name={element.name}
                lesson={element.lesson}
                onDragStart={onDragStart}
                onDrop={(e) => onDrop(e, laneId)}
              />
            ))
          )
      }
    </div>
  )
}
