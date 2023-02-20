const bcrypt = require('bcrypt')

const password = "123456789";

const start = async () => {
	const hashPassword = await bcrypt.hash(password, 3)

	console.log({password: hashPassword})

	const verify = await bcrypt.compare(password, hashPassword)

	await console.log(`verify ${verify}`)
}

start()