import { useDispatch , useSelector} from "react-redux"
import { getTodos } from "../store/reducers/todo"

const Todo = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state)=>state.todo.data );
    const isLoading = useSelector((state)=>state.todo.isLoading )

    const getTodoHandler =()=>{
        dispatch(getTodos());
        
    };
  return (
    <>
    <button className='welcome-btn' onClick={ getTodoHandler}>Get todo</button>
    <section>

            {isLoading && <p>Getting datas ..... </p>}
           {!isLoading && todos.map((todo) =>(<p>{todo.title}</p>))}
           {!isLoading && todos.length < 1 && <p>Click Get todo button to get your data</p>}
    </section>
    </>
  )
}

export default Todo