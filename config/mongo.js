/**
 * 初始化就连接 mongodb
 */

const mongoose = require('mongoose');

const DB_URL = 'mongodb://lcs:123456@47.107.181.194/detcx';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

module.exports = {
  connect: () => {
    mongoose.connect(DB_URL, options);
    const db = mongoose.connection;
    db.on('error', () => {
      console.log('mongodb connect Failed');
    });
    db.once('open', () => {
      console.log('mongodb connect suucess');
    });

  }
};
