import Todo from "../Types/models/Todo";
import User from "../Types/models/User";


export const users :User[] = []
export const todos :Todo[] = [];

// IIFE - Immediately Invoked Function Expression
(async (): Promise<void> => {
    const jon = new User('jon')
    await jon.hashPassword('1234')

    const todo1 = new Todo('clean the house', jon.id)
    const todo2 = new Todo('buy groceries', jon.id)

    users.push(jon)
    todos.push(todo1, todo2)
    console.log("data loaded")
})();


