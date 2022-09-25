import './Project.css';

export const Project = ({ name, lesson}) => {
  return (
    <div class="project-wrapper">
      <h3>{name}</h3>
      <span id="lesson"><i>What I've learned:</i> <br /><br />{lesson}</span>
    </div>
  )
}
