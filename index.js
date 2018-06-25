const express = require('express');
const jsonfile = require('jsonfile');

const FILE = 'pokedex.json';


/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

// Init express app
const app = express();

// built-in path module so that we can link to the file
var path = require('path');

//Allows access to files in public folder
app.use(express.static('views'));

// tell your app to use the module
app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets react to be the default view engine
app.set('view engine', 'jsx');

// Set up method-override for PUT and DELETE forms
const methodOverride = require('method-override')

app.use(methodOverride('_method'));


/**
 * ===================================
 * Routes
 * ===================================
 */

app.get('/:id/edit', (request, response) => {

  // running this will let express to run home.handlebars file in your views folder
  response.render('editForm')
})




//// pokemon search portion


app.get('/:id', (request, response) => {

  // get json from specified file
  jsonfile.readFile(FILE, (err, obj) => {
    // obj is the object from the pokedex json file
    // extract input data from request
    let inputId = request.params.id;

    // find pokemon by id from the pokedex json file
    // (note: find() is a built-in method of JavaScript arrays)
    let pokemon = obj.pokemon.find((currentPokemon) => {
      return currentPokemon.id === parseInt(inputId, 10);
    });

    if (pokemon === undefined) {

      // send 404 back
      response.status(404);
      response.send("not found");
    } else {

      response.send(pokemon);
    }
  });
});

app.get('/:id/delete', (request, response) => {

  jsonfile.readFile(FILE, (err, obj) => {
    // obj is the object from the pokedex json file
    // extract input data from request
    let inputId = request.params.id

    var pokemon = obj.pokemon.find((currentPokemon) => {
      return currentPokemon.id === parseInt(inputId, 10);
    });
    // console.log(pokemon);

    var context = {
      pokemon: pokemon
    }

  // running this will let express to run home.handlebars file in your views folder
  response.render('deleteForm', context)

   });
})

app.delete("/pokemon/:id", (request, response) => {
  //read the file in and write out to it
  // get json from specified file
  jsonfile.readFile(FILE, (err, obj) => {
    // obj is the object from the pokedex json file
    // extract input data from request
    let inputId = request.params.id
    inputId = parseInt(inputId)
    
    console.log(obj.pokemon[inputId-1]);

    obj.pokemon.splice(inputId - 1 ,1)

    let updatedPokedex = obj;
      
    jsonfile.writeFile(FILE, updatedPokedex, (err) => {

      response.send('pokemon deleted from pokedex!');

      });
  });

});





//// New Pokemon creation portion

app.get('/pokemon/new', (request, response) => {
  // running this will let express to run home.handlebars file in your views folder
  response.render('form')
})

//when the form is submitted, the input is POSTed
app.post('/pokemon', function(request, response) {
  
  //debug code (output request body)
  console.log(request.body);

  //reads Json file
  jsonfile.readFile(FILE, (err,obj) => {
    
    let newPoke = {
            "id": parseInt(request.body.id),
            "num": request.body.num,
            "name": request.body.name,
            "img": request.body.img,
            "height": request.body.height,
            "weight": request.body.weight,
    }
    
    //adds new object into pokemon's array
    obj.pokemon.push(newPoke)
    
    //to make sure var pokemon does not get overwritten
    let updatedPokedex = obj;

    //Updates Json file
    jsonfile.writeFile(FILE, updatedPokedex, (err) => {

      response.send('pokemon added to pokedex!');

      });

  })

});

////



app.get('/', (request, response) => {
  response.send("yay");
});

/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));
