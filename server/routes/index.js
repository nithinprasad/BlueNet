
const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.status(404).send("Invalid Route"));

router.post('/documents', controllers.createDocuments);
router.get('/documents', controllers.getAllDocuments);
router.get('/documents/:id', controllers.getByDocumentId);
router.get('/documents/:id/revisions', controllers.getAllRevisionsByDocumentId);
router.post('/documents/:id/revisions', controllers.createRevision);
router.get('/documents/:id/revisions/:revid', controllers.getRevisionById);

module.exports = router;