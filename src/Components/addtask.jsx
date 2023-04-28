import './addtask.css'

function Addtask () {
    return (
     <form>
<input type="text" autoComplete='off' maxLength={25} name='task' placeholder='add task' />
<button type="submit">Add</button>
     </form>
    );
}

export default Addtask
