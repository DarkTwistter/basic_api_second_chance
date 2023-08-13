module.exports = class Event {
    constructor(body) {
        this.user_id = body.user_id
        this.name = body.name
        this.date = new Date(body.date)
        this.description = body.description
        this.place = body.place
        this.duration = body.duration
        this.statistic = body.statistic
        this.images = body.images
        this.rating = body.rating
        this.price = body.price
        this.status = body.status
    }

    getModel(){
        return {
            user_id: +this.user_id,
            name: this.name,
            date: this.date,
            description: this.description,
            place: this.place,
            duration: this.duration,
            statistic: this.statistic,
            images: this.images,
            rating: this.rating,
            price: this.price,
            status: this.status
        }
    }
}