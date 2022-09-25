import './Lane.css';
import { Project } from '../Project/Project';

export const Lane = ({ title, loading, error, projects }) => {
  return (
    <div className='lane-wrapper'>
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
              />
            ))
          )
      }
    </div>
  )
}
