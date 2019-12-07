import express from 'express'
import candidateController from '../controllers/candidateController'

const router = express.Router()

router.get("/api/v1/candidates", candidateController.getCandidates);
router.post("/api/v1/candidates", candidateController.createCandidate);
router.get("/api/v1/candidates/:id", candidateController.getOneCandidate);
router.put("/api/v1/candidates/:id", candidateController.updateCandidate);
router.delete("/api/v1/candidates/:id", candidateController.deleteCandidate);

export default router;