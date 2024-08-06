import { Router } from 'express';

import GatepassController from '../controllers/gatepass_controller.js';

const gatepass_router = Router();

gatepass_router.get('/userperformance',GatepassController.getUserPeformance);

/* gatepass_router.get('/subjectwisetotals',GatepassController.getSubjectwiseTotalTrans); */

gatepass_router.get('/summarytotals',GatepassController.getTopSummary);

export default gatepass_router;