const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  // {
  //   username: 'user1',
  //   email: 'user1@user1.com',
  //   password: '12345',
  // },
  // {
  //   username: 'user2',
  //   email: 'user2@user.com',
  //   password: '12345',
  // },
  // {
  //   username: 'user3',
  //   email: 'user3@user3.com',
  //   password: '12345',
  // },
  // {
  //   username: 'user4',
  //   email: 'user4@user4.com',
  //   password: '12345',
  // },
  // {
  //   username: 'user5',
  //   email: 'user5@user5.com',
  //   password: '12345',
  // },
  {
    username: 'alesmonde0',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123',
  },
  {
    username: 'jwilloughway1',
    email: 'rmebes1@sogou.com',
    password: 'password123',
  },
  {
    username: 'iboddam2',
    email: 'cstoneman2@last.fm',
    password: 'password123',
  },
  {
    username: 'dstanmer3',
    email: 'ihellier3@goo.ne.jp',
    password: 'password123',
  },
  {
    username: 'djiri4',
    email: 'gmidgley4@weather.com',
    password: 'password123',
  },
  {
    username: 'msprague5',
    email: 'larnout5@imdb.com',
    password: 'password123',
  },
  {
    username: 'mpergens6',
    email: 'hnapleton6@feedburner.com',
    password: 'password123',
  },
  {
    username: 'tpenniell7',
    email: 'kperigo7@china.com.cn',
    password: 'password123',
  },
  {
    username: 'msabbins8',
    email: 'lmongain8@google.ru',
    password: 'password123',
  },
  {
    username: 'jmacarthur9',
    email: 'bsteen9@epa.gov',
    password: 'password123',
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
