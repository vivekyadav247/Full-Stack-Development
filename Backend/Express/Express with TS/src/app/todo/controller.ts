import type { Request, Response } from "express";
import { todoValidationSchema, type Todo } from "../../validation/todo.schema.js";

class TodoController{
  private _db: Todo[]

  constructor(){
    this._db = [] 
  }

  public handleGetAllTodos(req: Request, res: Response) {
    const todos= this._db ;
    return res.json({todos}) ;
  }

  public async handleCreateTodo(req: Request, res: Response) {
    try{      
      const unvalidatedData = req.body ;
      const validatedData = await todoValidationSchema.parseAsync(unvalidatedData) ;
      this._db.push(validatedData) ;
      return res.status(201).json({message: 'Todo created successfully',}) ;
    }catch(err){
      return res.status(500).json({error: 'Failed to create todo', details: err}) ;
    }
  }
}

export default TodoController;