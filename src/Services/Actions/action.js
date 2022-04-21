export const addTodo = (data) =>{
    return{
        type : "ADD_LIST" ,
        payload  : {
            id : new Date().getTime().toString(),
            data : data
        }
    }
}
export const deleteTodo = (id) =>{
    return{
        type : "DELETE_LIST", 
        id  
    }
}
export const removeTodo = () =>{
    return{
        type : "REMOVE_ALL_LIST" 
    }
}