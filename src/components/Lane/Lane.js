import './Lane.css';
import { Project } from '../Project/Project';

export const Lane = ({ title, loading, error, projects, onDragStart, onDragOver }) => {
  return (
    <div className='lane-wrapper' onDragOver={onDragOver}>
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
              />
            ))
          )
      }
    </div>
  )
}
