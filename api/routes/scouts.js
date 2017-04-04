import Scout from '../models/Scouts'

function hasId(data, id) {
  return data.models.some(function (el) {
    return el.attributes.user_id_scout == id;
  });
}

async function get (ctx, id) {
  await Scout.where('user_id', id).fetchAll().then((scouts) => { 
    ctx.body = 'Liste des scouts : \n'
    var i = 1
    for (var scout of scouts.models) {
      ctx.body += 'Scout n° ' + i + ' => ' + scout.attributes.id + '\n'
      i++
    }
  })
};

async function add (ctx, user_id, id) {
  await Scout.where('user_id', user_id).fetchAll().then((scouts) => {
    if (hasId(scouts, id)) {
      ctx.body = 'L\'utilisateur a déjà ajouté cet autre utilisateur en éclaireur.'
    } else {
      new Scout({'user_id': user_id, 'user_id_scout': id, 'state': 1}).save().then((scout) => {
        ctx.body = 'L\'utilisateur a bien ajouté l\'autre utilisateur, identifié par l\'ID ' + id + ' à sa liste d\'éclaireurs.'
      })
    }
  })
}

export default { get, add };