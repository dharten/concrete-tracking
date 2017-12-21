const express = require("express");
const jobRoutes = express.Router();
const Job = require("../models/job");

jobRoutes.route("/")
  .get((req, res) => {
    Job.find((err, jobs) => {
      if (err) return res.status(500).send(err);
      res.send(jobs);
    })
  })
  .post((req, res) => {
    console.log(req.body)
    const newJob = new Job(req.body);
    newJob.save(err => {
      if (err) return res.status(500).send(err);
      res.send(newJob);
    })
  })

jobRoutes.route("/check-out")
  .put((req, res) => {
    Job.update(
      {_id: {$in: req.body.ids}},
      {$set: {checkedOut: true}},
      {multi: true},
      (err, result) => {
        if (err) return res.status(500).send(err);
        Job.find((err, jobs) => {
          if (err) return res.status(500).send(err);
          res.send(jobs)
        })
    })
  })

jobRoutes.route("/:id")
  .get((req, res) => {
    Job.findById(req.params.id, (err, job) => {
      if (err) return res.status(500).send(err);
      res.send(job);
    })
  })
  .delete((req, res) => {
    Job.findByIdAndRemove(req.params.id, (err, job) => {
      if (err) return res.status(500).send(err);
      res.send(job);
    })
  })
  .put((req, res) => {
    Job.findById(req.params.id, (err, job) => {
      if (err) return res.status(500).send(err);
      if (req.body.address) {
        job.address = Object.assign(job.address, req.body.address);
        delete req.body.address;
      };
      job = Object.assign(job, req.body);
      job.save(err => {
        if (err) return res.status(500).send(err);
        res.send(job);
      })
    })
  })



module.exports = jobRoutes;
