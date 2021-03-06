require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5ecc3aa045329c171e2f4b69', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5ecc3b3e199179174ea3a5d2', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})