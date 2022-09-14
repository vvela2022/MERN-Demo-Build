const express = require('express')
const router = express.Router()
const {People} = require('../models')//this line is what is importing the poeple model into the controller from the index page. (the index page is referencing the people.js page which is why we can just require ../models)

//Routes
router.get('/', async (req, res) => {
    try{
        res.json(await People.find({}))
    } catch(err) {
        console.log(err)
    }
    // const context = {message: 'people index route'}
    // res.status(200).json(context)//is best practice to add in the status code you are expecting
})

router.post('/', async (req, res) => {
    try{
        res.status(201).json(await People.create(req.body))
    } catch(error) {
        res.status(400).json(error)
    }
    //is best practice to add in the status code you are expecting
})

// //PEOPLE SHOW ROUTE
router.get('/:id', async (req, res) => {
    try{
        res.status(200).json(await People.findById(req.params.id));
    } catch (error) {
        console.log(error);
    }
});

// PEOPLE UPDATE ROUTE

router.put('/:id', async (req, res) => {
    try{
        res.json(await People.findByIdAndUpdate(req.params.id, req.body, {new:true}))
    } catch (error){
        console.log(error)
    }
});

//PEOPLE DELETE ROUTE
router.delete('/:id', async (req, res) => {
    try{
        res.json(await People.findByIdAndRemove(req.params.id))
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;

