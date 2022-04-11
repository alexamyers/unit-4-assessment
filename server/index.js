const express = require("express");
const cors = require("cors");
const { captureRejections } = require("events");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = [
          "All the effort you are making will ultimately pay off.",
					 "Disbelief destroys the magic.",
					 "Happy life is just in front of you.",
           "Never fear! The end of something marks the start of something new.",
           "Welcome change.",
  ];

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];
  res.status(200).send(randomFortune);
  
});

app.get("/api/working", (req, res) => {
  const workInProgress = [
    "It's JavaScript today!",
    "Clearly REST methods today!",
    "More brainpower!!",
  ];

  let randomIndex = Math.floor(Math.random() * workInProgress.length);
  let randomWorkInProgress = workInProgress[randomIndex];
  res.status(200).send(randomWorkInProgress)
});

app.get("/api/get-lyrics", (req, res) => {
  const getLyrics = [
    "GET down on it!",
    "Everybody GET together, try to love one another right now", 
    "And if I could, I'd GET you the moon"
  ];

  let randomIndex = Math.floor(Math.random() * getLyrics.length);
  let randomGetLyrics = getLyrics[randomIndex];
  res.status(200).send(randomGetLyrics)
});

app.get("/api/salaryfifty", (req, res) => {
  let fiftyMessage = "Congrats on the job bud!"
  res.status(200).send(fiftyMessage)
});

app.get("/api/salaryseventy", (req, res) => {
  let seventyMessage = "Woah! Way to make those dollar bills!"
  res.status(200).send(seventyMessage)
});

app.get("/api/salaryninety", (req, res) => {
  let ninetyMessage = "You're a code crusher my friend!"
  res.status(200).send(ninetyMessage)
});

app.post("/api/name", (req, res) => {
let name = req.body
res.status(200).send(`Thanks ${name}! Your input has been noted!`)
}) //missing something - not working properly


// const { getAllJobs, deleteJob, createJob, updateJob } = require(`./job_controller/controller`);

// app.get('/api/future', getAllJobs);
// app.delete('/api/future/:id', deleteJob);
// app.post('/api/future', createJob);
// app.put('/api/future/:id', updateJob);


app.listen(4000, () => console.log("Server running on 4000"));