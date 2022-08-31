const router = require('express').Router()
const Item = require('../models/Item')


// add array item
router.post('/items', async (req, res) => {
     console.log(req.body);
    const items = req.body;
    for(var item in items){
        new Item(items[item])
          .save()
          .catch((err)=>{
            res.json({ status: 500, error: err })
          });
        }
   
         res.json({ status: 201, items: items })
 
})

//add item

router.post('/item', async (req, res) => {
    
    const item = new Item(req.body)
    try {
        const newItem = await item.save(function (err, item) {
            if (err) {
                console.log(err)
                return err;
            }
            res.json({ status: 201, item: item })
        })
    } catch (err) {
        res.json({ status: 500, error: err })
    }
})

// edit item
router.post('/items/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    console.log("updates", updates)
    const allowedUpdates = ["value","type","label"];
    const isValidOpreration = updates.every((update) => {
        console.log("update", update)
        allowedUpdates.includes(update)
    })
    if (isValidOpreration) {
        return res.status(404).send('invalid update')
    }
    try {
        console.log(req.body);
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!item) {
            res.status(404).send('item not found')
        }
        res.send(item)
    } catch (err) {
        console.log(err);
    }
})
//delete item
router.delete('/item/:id', async (req, res) => {
    console.log("id:" + req.params.id);
    Item.findByIdAndDelete(req.params.id, (err, item) => {
        if (err)
            res.status(400).send(err)
        console.log("success!");
        res.status(200).send(item)
    })
})


// get all items
router.get('/items', async (req, res) => {
    Item.find().then(items => {
        if (!items)
            console.log(items);
        res.send(items);
    })
        .catch((err) => {
            res.status(500).send(err)
        })
})
// get item by id
router.get('/item/:id', async (req, res) => {
    console.log(req.params);
    const id = req.params.id
    Item.findById(id).then((item) => {
        if (!item) {
            return res.status(404).send('item not found')
        }
        res.send(item)
    })
        .catch((err) => {
            res.status(500).send(err)
        })
})


module.exports = router