require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.countDocuments().then((count) => {
//     console.log(count)
// })

// Task.findByIdAndDelete('5ec8191926977743785b95e4').then((result) => {
//     console.log(result)
//     return Task.countDocuments({ completed: false })
// }).then((count) => {
//     console.log(count)
// })

const deleteTaskAndCount = async (id) => {
    const user = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5ec723808a1e7d1294a0af55').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})