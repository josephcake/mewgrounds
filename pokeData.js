let express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    app = express(),
    pokeDataRoutes = express.Router(),
    port = process.env.PORT || 5000;

let PokeData = require('./pokeData.model.js')
app.use(cors())
app.use(bodyParser.json())
mongoose.connect('mongodb://localhost:27017/pokeDatas', {useNewUrlParser: true});
connection = mongoose.connection;
connection.once('open', function(){
  console.log("Mongodb connection: successfully");
})

pokeDataRoutes.routes('/').get(function(req, res){
  PokeData.find(function(err, pokeDatas){
    if(err){
      console.log(err);
    }else(
      res.json(pokeDatas);
    )
  })
})

pokeDataRoutes.routes('/:id').get(function(req, res){
  let id = req.params.id
  PokeData.findById(id, function(err, pokeDatas){
    res.json(pokeDatas)
  })
})

pokeDataRoutes.routes('/add').post(function(req, res){
  let pokeData = new PokeData(req.body)
    pokeData.save()
    .then(pokeData => {
      res.status(200).json({'pokeData': 'pokeData added successfully'})
    })
    .catch(err => {
      res.status(400).send('pokeData: failed')
    })
})

pokeDataRoutes.routes('/update/:id').post(function(req, res){
  let id= req.params.id
  PokeData.findById(id, function(err, pokeDatas){
    if(!pokeDatas){
      res.status(404).send("PokeData: not found")
    }else {
      pokeDatas.pokeData_id = req.body.pokeData_id;
      pokeDatas.pokeData_name = req.body.pokeData_name;
      pokeDatas.pokeData_url = req.body.pokeData_url;
      pokeDatas.pokeData_image = req.body.pokeData_image;
      pokeDatas.pokeData_type = req.body.pokeData_type;

      pokeDatas.save().then(pokeData => {
        res.json("pokeData updated")
      })
      .catch(err => {
        res.status(404).send("update failed")
      })
    }
  })
})


app.use('/pokeDatas', pokeDataRoutes)
app.listen(port, ()=>{
  console.log("my server" + port);
})
