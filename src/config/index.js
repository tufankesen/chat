import mongodb from 'mongodb';

export default {
  //"port": 3005,
  //"mongoUrl": "mongodb://localhost:27017/chat-api",
  "port": process.env.PORT,
  "mongoUrl": mongodb+srv://adminTufan:1234567890@cluster0.jpibe.mongodb.net/Cluster0?retryWrites=true&w=majority,
  "bodyLimit": "100kb"
}
