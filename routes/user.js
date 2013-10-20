
/*
 * GET users listing.
 */

var scores = [];

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.save = function(req, res){
  scores.push(req.query.scores);

  console.log("[SERVER] Your scores: " + scores); 
};