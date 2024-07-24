import { Router } from 'express';

import AppointmentController from '../controllers/appointment_controller.js';

const appointment_router = Router();

appointment_router.get('/serviceagentsummary',AppointmentController.getServiceAgentSummary);

/*
jobinout_router.get('/subjectwisetotals',JobInOutController.getSubjectwiseTotalTrans);*/

appointment_router.get('/summarytotals',AppointmentController.getTopSummary);

export default appointment_router;