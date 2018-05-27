var express = require('express')
var router = express.Router()

var users = {
	'id_1' : {
		name: 'Andrey',
		surname: 'Glutskoi',
		age: 42
	},

	'undefined': {
		name: 'undefined',
		surname: 'no surname',
		age: Math.random().toString(36)
	}
}


/* Controllers */

var DataContorller = {
	userGetData(req, res, next){
		let id = req.params.id

		if(id == undefined) res.status(400).send('no user id')
			
		if(users[id]){
			res.send(JSON.stringify( users[id] ))
		} else {
			l('no user id')
			res.send(JSON.stringify( users['undefined'] ))
			//res.status(404).send(`no user with that id : ${id}`)
		}	
	}
}

/////////////////

router.get('/user/data/:id', DataContorller.userGetData)


module.exports = router
