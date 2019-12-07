import Candidates from "../db/candidates";

class candidatesController {
    static getCandidates(req,res){
        // Get all candidates
        Candidates.find().then(response => {
           if(response){
               res.status(200).json({
                   message: "Available Candidates",
                   candidates: response
               })
           } else {
               res.status(404).json({
                   message: "No Candidates Found"
               })
           }
        }).catch(error => {
            res.status(400).json({
                message: error
            })
        })
    }

    static createCandidate(req,res){
        // create new candidate
        const createCand = new Candidates(req.body)
        createCand.save().then(result => {
            res.status(201).json({
                message: "New Candidate Added!",
                candidate: createCand
            })
        }).catch(error => {
            res.status(400).json({
                error
            })
        })
    }

    static getOneCandidate(req,res){
        // Get Specific Candidate
        const id = req.params.id;
        Candidates.findById({_id: id}).then(result => {
            res.status(200).json({
                message: "One candidate found!",
                candidate: result
            })
        }).catch(err => {
            res.status(400).json({ err })
        })
    }

    static deleteCandidate(req,res){
        // Delete a candidate
        const id = req.params.id;
        Candidates.findOneAndDelete({ _id: id}).then(result => {
            res.status(204).json({ message: "Deleted Successfully!"})
        }).catch(err => {
            res.status(400).json({ err })
        })
    }

    static updateCandidate(req,res){
        const  id  = req.params;
        Candidates.findOneAndUpdate({ _id: id }, {
            $set: req.body
        }).then(result => {
            res.status(201).json({
                message: "Updated one Candidate",
                candidate: result
            })
        }).catch( err => {
            res.status(400).json({ err })
        })
    }

    static getBestCandidate(req,res){
        /**
         * To be implemented with db
         */
    }
}

export default candidatesController;