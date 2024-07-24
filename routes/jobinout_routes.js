import { Router } from 'express';

import JobInOutController from '../controllers/jobinout_controller.js';

const jobinout_router = Router();

/*jobinout_router.get('/userperformance',JobInOutController.getUserPeformance);

jobinout_router.get('/subjectwisetotals',JobInOutController.getSubjectwiseTotalTrans);*/

jobinout_router.get('/summarytotals',JobInOutController.getTopSummary);

export default jobinout_router;