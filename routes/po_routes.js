import { Router } from 'express';

import POController from '../controllers/po_controller.js';

const po_router = Router();

po_router.get('/summarytotals',POController.getTopSummary);

po_router.get('/statussummary',POController.getStatusSummary);

export default po_router;