const express = require('express')
const router = express.Router()
const request = require('request')
const config = require('../app/models/config')

router.get('/', (req, res, next) => {
    return res.render('index')
})

router.get('/register', (req, res, next) => {
    return res.render('register')
})

router.get('/items', (req, res, next) => {
	request.get({
		url: config.apiUrl + '/items'
	}, (err, response, body) => {
		if (err) return next(err)
		if (!body) return next(new Error('Missing body ' + body))
		return res.render('items', { items: body })
	})
})

router.post('/register', (req, res, next) => {
	request.post({
		url: config.apiUrl + '/users/student',
		form: req.body
	}).pipe(res)
})

router.get('/login', (req, res, next) => {
	return res.render('login')
})

router.post('/login', (req, res, next )=> {
	request.post({
		url: config.apiUrl + '/login'
	}).pipe(res)
})
module.exports = router
