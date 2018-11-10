//import Realm from "../connection";
import Realm from "realm";

const todoTable = new Realm({
    schema:[{
        name:'Todo',
        properties:{
            todo:'string',
            createAt:{type:'date',default:new Date()}
        }
    }]
    
});

class Todo {
    add(dataToAdd){
        todoTable.write(()=>{
            todoTable.create('Todo',dataToAdd)
        })
    }
    all(){
        return todoTable.objects('Todo')
    }
}

export default new Todo();
