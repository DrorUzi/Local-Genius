const authService = require('./auth.service')

async function login(req, res) {
    const { email, password } = req.body
    try {
        const user = await authService.login(email, password)
        req.session.user = user;
        res.json(user)
    } catch (err) {
        send({ error: err })
        // res.status(401).send({ error: err })
    }
}

async function signup(req, res) {
    try {
        const { email, password, name } = req.body
        const account = await authService.signup(email, password, name)
        const user = await authService.login(email, password)
        req.session.user = user
        res.json(user)
    } catch (err) {
        res.status(500).send({ error: 'could not signup, please try later' })
    }
}

async function logout(req, res) {
    try {
        req.session.destroy()
        res.send({ message: 'logged out successfully' })
    } catch (err) {
        res.status(500).send({ error: err })
    }
}

module.exports = {
    login,
    signup,
    logout
}