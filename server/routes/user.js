const express = require('express')
const User = require('../model/schema');
const Note = require('../model/notesSchema');
const {OAuth2Client} = require('google-auth-library');
const mongoose = require('mongoose');

const clientID = "";
const authClient = new OAuth2Client(clientID);

const router = express.Router()
router.post('/',(req,res) => {
    const {idToken} = req.body.idToken;
    const {Id} = req.body.Id;
    if(idToken){
        authClient.verifyIdToken({idToken, audience:clientID})
        .then(response =>{
            const {email_verified,email,name,picture} = response.payload;
            if(email_verified){
                User.findOne({}).then((user) => {
                    if(user){
                        console.log(user);
                        Note.find({ user: "123"}).then(notes => {
                            res.json({ user, notes });
                        }).catch(err => {
                            console.log(err);
                            res.status(500).send("Error retrieving user's notes");
                        });
                    }else{
                        let password = email + clientID
                        let newUser = new User({name,email,picture,password,Id})
                        newUser.save().then((response) => {
                            res.json(response);
                        }).catch((err) =>{
                            console.log(err);
                        })
                    }
                }).catch((err) => {
                    console.log(err);
                })
            }
            
        }).catch((err) => {
            console.log(err);
        })
    }
});

router.post('/addNote', async (req, res) => {
    try {
      const { note } = req.body; 
      console.log(note);
      if (note) {    
        const createdNote = await Note.create(note); 
        res.json(createdNote);
      } else {
        res.status(400).json({ message: 'Invalid data format' });
      }
    } catch (error) {
      console.error('Error creating note:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  

  router.get('/getNotes', async (req, res) => {
    try {
      const allNotes = await Note.find();
      res.json({ notes: allNotes });
    } catch (error) {
      console.error('Error fetching notes:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });

  router.delete('/deleteNote/:id', async (req, res) => {
    try {
      console.log("The ID here is "+req.body);
      const deletedNote = await Note.deleteOne({id:req.params.index});
      if (!deletedNote) {
        return res.status(404).json({ message: 'Note not found' });
      }
  
      res.json({ message: 'Note deleted successfully' });
    } catch (error) {
      console.error('Error deleting note:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });

module.exports = router;