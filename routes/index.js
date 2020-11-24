var express = require('express');
const drugModel = require('../models/drug.model');
var router = express.Router();

// TODO: 

/* GET home page. */

// get - read
// post - create
// put - update
// delete - del
router.get('/drug', async function (req, res, next) {
  try {
    const drugs = await drugModel.getAll()
    res.status(200).send(drugs)
  } catch (error) {
    next(error)
  }
});

router.post('/drug', async function (req, res, next) {
  const newDrug = req.body // 
  drugModel.add(newDrug)
  res.status(201).json({
    message: "Success"
  })
});

router.delete('/drug/:id', async function (req, res, next) {
  // const oldDrug = req.body

  const drugId = req.params['id']
  try {
    // drugModel.erase(oldDrug)
    drugModel.removeById(drugId)
    res.status(204).json({
      message: "Success"
    })
  } catch (error) {
    next(error)
  }

})




module.exports = router;