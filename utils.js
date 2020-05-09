module.exports = {
    age: function age(timestamp) {
        const today = new Date() //data do dia
        const birthDate = new Date(timestamp)//data do aniversario

        let age = today.getFullYear() - birthDate.getFullYear()// ano dia - ano aniversario
        let month = today.getMonth() - birthDate.getMonth()// mes dia - mes aniversario

        if (month < 0 || month == 0 && today.getDate() <= birthDate.getDate()) {
            age = age - 1
        }
        return age
    },
    date: function(timestamp) {
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()

        const month = `0${date.getUTCMonth() + 1}`.slice(-2)

        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`
        }
    }
}