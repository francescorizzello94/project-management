import './Project.css';

export const Project = ({ id, name, lesson, onDragStart}) => {
  return (
    <div class="project-wrapper" draggable onDragStart={(e) => onDragStart(e, id)}>
      <h3>{name}</h3>
      <span id="lesson"><i>What I've learned:</i> <br /><br />{lesson}</span>
    </div>
  )
}
