import { Router } from 'express';

import ReceptionController from '../controllers/reception_controller.js';

const reception_router = Router();

reception_router.get('/userperformance',ReceptionController.getUserPeformance);

reception_router.get('/subjectwisetotals',ReceptionController.getSubjectwiseTotalTrans);

reception_router.get('/summarytotals',ReceptionController.getTopSummary);

export default reception_router;