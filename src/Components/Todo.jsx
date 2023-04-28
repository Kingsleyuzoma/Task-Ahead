import './todo.css';
import {useState} from 'react';

function Todo() {

    const [task, setTask] = useState([
{"id": 1, "name": "Zino","time": "Mummy"},
{"id": 2, "name": "Cath","time": "Abacha"},
{"id": 3, "name": "Maureen","time": "250k"},
{"id": 4, "name": "Excel","time": "Question"},
{"id": 5, "name": "Victor","time": "CEO"},
{"id": 6, "name": "Nozie","time": "JavaScript"},
{"id": 7, "name": "Nathan","time": "pepper"},
    ])

    return(

        <div className='todo'>
            <div className='top'>
                <div className='top-left'>
                    <h2>Todo</h2>
                    <span className='count'>0</span>
                </div>
                <div className='top-right'>
                    <p className='count'>Clear All</p>
                </div>
            </div>
            <div className='bottom'>

                {task.map((data) => (
                   <div className='card' key={data.id}>
                   <div className='card-top'>
                       <h3>{data.name}</h3>
                       <div className='btn'>Delete</div>

                   </div>
                   <div className='time'>{data.time}</div>

               </div>
                

                 ))}



               
             
               
            </div>
        </div>
    );
}
export default Todo