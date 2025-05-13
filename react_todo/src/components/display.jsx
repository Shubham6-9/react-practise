import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, clearTodo } from "../redux/action";

export default function Display() {
    const list = useSelector((state) => state);
    const dispatch = useDispatch()

    const edit = (e, id) => {
        document.getElementById("todo-input").value = e
        dispatch(deleteTodo(id))
    }

    return (
        <div id="displayData">
            <button id="clear" onClick={() => dispatch(clearTodo(list))}>Clear All</button>
            {
                list ? (
                    list.map((e, i) => {
                        return (
                            <div key={i} className="list-item">
                                <div className="item-info">
                                    <p className="item-content">Content: {e.content}</p>
                                </div>
                                <button className="delete-btn" onClick={() => dispatch(deleteTodo(i))}>X</button>
                                <button className="delete-btn" onClick={() => edit(e.content, i)}>edit</button>
                            </div>
                        );
                    })
                ) : <p className="no-record">No Record Found!</p>
            }
        </div>
    );
}