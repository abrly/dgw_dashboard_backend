import { Router } from 'express';

import InsuranceController from '../controllers/insurance_controller.js';

const insurance_router = Router();

insurance_router.get('/userperformance',InsuranceController.getUserPeformance);

insurance_router.get('/subjectwisetotals',InsuranceController.getSubjectwiseTotalTrans);

insurance_router.get('/summarytotals',InsuranceController.getTopSummary);

export default insurance_router;