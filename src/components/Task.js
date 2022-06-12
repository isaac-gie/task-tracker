import Proptypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'

const Task = ({ task }) => {
  return (
    <div className="task">
        <h3>
            {task.text} <FaTimes style={{color: 'red', cursor: 'pointer'}} />
        </h3>
        <p>{task.day}</p>
    </div>
  )
}

FaTimes.propTypes = {
    color: Proptypes.string,
    cursor: Proptypes.string,
}

export default Task