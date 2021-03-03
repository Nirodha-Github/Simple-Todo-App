import {useState} from 'react';
import { FaTrashAlt} from "react-icons/fa";

const Todo = () => {
  
const [task,setTask]=useState('');
const [lists,setLists]=useState([]);

    //add items 
    const addToDo=(task)=>{
        lists.push(task);
        setLists(lists);
        setTask('');
    }
    
    //delete items
    const deleteToDo = (id) => {
        var newlists=lists;
        newlists.splice(id,1);
        setLists([...newlists]);
    
    }


    return (
        <div className="content"> 
            <div className="form">
               <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} placeholder="Enter your todo"/> 
               <button className="add" onClick={()=>{addToDo(task)}}>+</button>
            </div>
            <ul>
              {lists.map((list,i) =>  
                     <li key={i}>{list}
                         <button onClick={()=>deleteToDo(i)}><FaTrashAlt className="icond" font-size="large"/></button>
                     </li>  

             )} 
             
           </ul> 
        </div>
     );
}
 
export default Todo;