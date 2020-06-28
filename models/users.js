const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema
const usersSchema = new Schema({
  username: String, // String is shorthand for {type: String}
  age: Number,
  gender: String,
  fruit: String,
  address: String,
});

// Model(表)
const Users = mongoose.model("Users", usersSchema);

module.exports = Users;

// 这样，一个用户集合的 model 就建好了，接下来在路由中直接引入这个 model，就可以进行数据库操作了
