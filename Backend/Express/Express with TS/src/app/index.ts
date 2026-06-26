import express from 'express'
import type { Application } from 'express'

// Routes
import todoRoutes from '../app/todo/routes.js'


export function createServerApplication() : Application {
  const app = express() ;
  app.use(express.json()) ;

  app.use('/todos', todoRoutes)

  return app ;
}