const express=require('express');
const Router=express.Router();
const Message=require('../controllers/Message.controller.js');
const auth=require('../middlewares/auth.js')


Router.post('/message',auth,Message.createMessage)
Router.get('/messages',auth,Message.getAllMessages)
Router.get('/message/:id',auth,Message.getOneMessage)
Router.get('/messages/:discussionID',auth,Message.getAllDiscussionMessages)
Router.put('/message/update',auth,Message.updateMessage)
Router.delete('/message/delete',auth,Message.deleteOneMessage)
Router.delete('/messages/delete',auth,Message.deleteAllDiscussionMessage)//delete All discussion Messages

module.exports=Router;