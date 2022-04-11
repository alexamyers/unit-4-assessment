// const futureJob = document.querySelector('#jobs-container')
// const form = document.querySelector('form')

// const baseURL = `http://localhost:4000/api/future`

// const jobsCallback = ({ data: jobs }) => displayJobs(jobs)
// const errCallback = err => console.log(err)

// const getAllJobs = () => axios.get(baseURL).then(jobsCallback).catch(errCallback);
// const createJob = body => axios.post(baseURL, body).then(jobsCallback).catch(errCallback);
// const deleteJob = id => axios.delete(`${baseURL}/${id}`).then(jobsCallback).catch(errCallback);
// const updateJob = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(jobsCallback).catch(errCallback);



// function submitHandler(e) {
//     e.preventDefault()
  
//     let title = document.getElementById('#title');
//     let salary = document.getElementById('#salary');
//     let photo = document.getElementById('#photo');
  
//     let bodyObj = {
//       title: title.value,
//       salary: salary.value, 
//       imageURL: imageURL.value
//     }
  
//     createJob(bodyObj)
  
//     title.value = '' 
//     salary.value = ''
//     imageURL.value = ''
//   }
  
// function createJobCard(job) {
//     const jobCard = document.createElement('div')
//     jobCard.classicList.add('job-card')

//     jobCard.innerHTML = `<img alt="job cover image" src=${job.imageURL} class="job-cover-image"/>
//     <p class="title">${job.title}</p>
//     <div class="btns-container">
//         <button onclick="updateJob(${job.id}, 'minus')">-</button>
//         <p class="job-salary">$${job.salary}</p>
//         <button onclick="updateJob(${job.id}, 'plus')">+</button>
//     </div>
//     <button onclick="deleteJob(${job.id})">delete</button>
//     `

//     jobsContainer.appendChild(jobCard)
// }

// function displayJobs(arr) {
//     jobsContainer.innerHTML = ``
//     for(let i = 0; i < arr.length; i++) {
//         createJobCard(arr[i])
//     }
// }

// form.addEventListener('submit', submitHandler)

// getAllJobs()

