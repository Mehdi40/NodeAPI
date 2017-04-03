import Scout from '../models/Scouts'

async function add (ctx) {
  post(function (req, res) {
    Scout.forge({
      id: req.body.id,
    })
    .save()
    .then(function (user) {
      res.json({error: false, data: {id: user.get('id')}});
    })
    .otherwise(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    }); 
  });
};

export default { add };