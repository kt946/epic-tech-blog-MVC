const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
	{
		username: 'RandomUser',
		password: '12345'
	},
	{
		username: 'TechGuy',
		password: 'cooltech123'
	},
	{
		username: 'CodeDev',
		password: 'ilovecoding'
	},
	{
		username: 'DataBro',
		password: 'stat135!'
	},
	{
		username: 'SomeDude',
		password: 'somethingcool456'
	}
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
