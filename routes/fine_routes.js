import { Router } from 'express';

import FineController from '../controllers/fine_controller.js';

const fine_router = Router();

fine_router.get('/typewisetotals',FineController.getTypewiseTotalTrans);

fine_router.get('/summarytotals',FineController.getTopSummary);

export default fine_router;