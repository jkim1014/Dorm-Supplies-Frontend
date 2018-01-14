const form = document.forms[0]

function register() {
	var data = {}
	
	if (form.name.value) data.name = form.name.value
	if (form.email.value) data.email = form.email.value
	if (form.classYear.value) data.classYear = form.classYear.value
	if (form.address.value) data.address = form.address.value
	if (form.password.value) data.password = form.password.value
	if (form.confirm.value) data.confirm = form.confirm.value

	fetch('/register', {
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST',
		body: JSON.stringify(data)
	}).then(function(res) {
		if (!res.ok) {
			res.text()
			.then(function(message) {
				alert(message)
			})
		}
		res.json()
		.then(function(user) {
			window.location = '/'
		})
	}).catch(function(err) {
		console.error(err)
	})
}

function login() {
	var data = {}

	if (form.email.value) data.email = form.email.value
	if (form.password.value) data.password = form.password.value

	fetch('/login', {
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST',
		body: JSON.stringify(data)
	}).then(function(res) {
		if (!res.ok) { alert('ERROR') }
		res.json()
		.then(function(data) {
			alert(JSON.stringify(data))
			Window.localStorage.token = data.token
			window.location = '/'
		})
	})
}