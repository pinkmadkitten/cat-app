const restify = require("restify");
const cats = require("./db/cats");
const facts = require("./db/facts");


const server = restify.createServer();

server.use(
  function crossOrigin(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    return next();
  }
);

server.listen(process.env.port || process.env.PORT || 8080, function(){
  console.log("%s listening to %s", server.name, server.url);
});

server.get("/breeds", function(req,res,next){
  res.send(cats.breeds);
  next();
});

server.get("/facts", function(req,res,next){
  res.send(facts.all);
  next();
});

server.get("/facts/:breed", function(req,res,next){
  const randomFact = getRandom(facts[req.params.breed]);
  res.send(randomFact);
  next();
});

server.get("/pictures", function(req,res,next){
  res.send(cats.pictures.all);
  next();
});

server.get("/pictures/:breed", function(req,res,next){
  res.send(cats.pictures[req.params.breed]);
  next();
});

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
