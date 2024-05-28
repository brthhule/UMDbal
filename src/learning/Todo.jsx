function Todo (props) {
    return (
        <li className="todo stack-small">
            <div className="c-cb">
                <input id="todo-1" type="checkbox" defaultChecked={props.completed}/>
                <label className="todo-label" htmlFor="todo-1">
                    {props.activity}
                </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn">
                Edit <span className="visually-hidden">{props.activity}</span>
                </button>
                <button type="button" className="btn btn__danger">
                Delete <span className="visually-hidden">{props.activity}</span>
                </button>
            </div>
        </li>
    )
    
}

export default Todo;