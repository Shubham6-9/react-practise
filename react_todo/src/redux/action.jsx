export const addTodo = (text) => {
    const task = {
        content: text
    }
    return {
        type: "add",
        payload: task
    }
}

export const deleteTodo = (id) => {
    return {
        type: "delete",
        payload: id
    }
}

export const clearTodo = (list) => {
    return {
        type: "clear",
        payload: list
    }
}