import './Task.css';

export const Project = ({ name, lesson}) => {
  return (
    <div class="project-wrapper">
      <h3>{name}</h3>
      <span>{ lesson}</span>
    </div>
  )
}
