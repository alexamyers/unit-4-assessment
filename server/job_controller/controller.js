// const jobs = require('.db.json')
// let newJobID = jobs.length + 1;

// const getAllJobs = (req, res) => {
//     res.status(200).send(jobs)
// }

// const deleteJob = (req, res) => {
//     const jobToBeDeleted = +req.params.id 
//     for(let i = 0; i < jobs.length; i++) {
//         const job = jobs[i]
//         if(job.id === jobToBeDeleted) {
//             jobs.splice(i, 1)
//             return res.status(200).send(jobs)
//         }
//     }
//     return res.status(400).send(jobs)
// }

// const createJob = (req, res) => {
//     let { title, salary, imageURL } = req.body

//     const newJob = {
//         id: newJobID,
//         title, 
//         salary, 
//         imageURL,
//     }

//     jobs.push(newJob)

//     res.status(200).send(jobs)

//     newJobID++
// }

// const updateJob = (req, res) => {
//     let jobToBeUpdated = +req.params.id
//     const { type } = req.body

//     for(let i = 0; i < jobs.length; i++) {
//         const job = jobs[i]

//         if(job.id === jobToBeUpdated) {
//             if(type === 'plus') {
//                 job.salary += 1000
//                 return res.status(200).send(jobs)
//             } else if(type === 'minus') {
//                 job.salary -= 1000
//                 return res.status(200).send(jobs)
//             }
//         }
//     }
//     res.sendStatus(400)
// }

// module.exports = {
//     getAllJobs,
//     deleteJob,
//     createJob,
//     updateJob,
// }