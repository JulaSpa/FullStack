import express from 'express';
// Routes import
import employeeRouter from './employees';
import membersRouter from './members';

const router = express.Router();
router
  .use('/employees', employeeRouter)
  .use('/members', membersRouter);

export default router;
