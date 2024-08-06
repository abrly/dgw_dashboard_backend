import { Router } from 'express';

import FleetRequestController from '../controllers/fleetreq_controller.js';

const fleetreq_router = Router();

fleetreq_router.get('/summarytotals',FleetRequestController.getTopSummary);

fleetreq_router.get('/statussummary',FleetRequestController.getStatusSummary);

export default fleetreq_router;