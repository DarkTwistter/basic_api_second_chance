const bcrypt = require('bcryptjs')

module.exports = class User {
    constructor(body) {
        const salt = bcrypt.genSaltSync(10)

        this.name = body.name
        this.email = body.email
        this.password = bcrypt.hashSync(body.password, salt)
        this.role = body.role
    }

    getModel(){
        return {
            name: this.name,
            email: this.email,
            password: this.password,
            role: this.role
        }
    }
}