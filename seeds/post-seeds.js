const { Post } = require('../models');

const postdata = [
	{
		title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		content: 'At consectetur lorem donec massa. Scelerisque purus semper eget duis at tellus at urna condimentum. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut.',
		user_id: 1
	},
	{
		title: 'Mauris ultrices eros in cursus turpis.',
		content: 'Itae suscipit tellus mauris a diam maecenas. Mi proin sed libero enim sed faucibus turpis in.',
		user_id: 3
	},
	{
		title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
		content: 'Lobortis feugiat vivamus at augue eget arcu dictum varius duis.',
		user_id: 2
	},
	{
		title: 'Bibendum est ultricies integer quis auctor elit sed vulputate mi.',
		content: 'Eu sem integer vitae justo eget magna fermentum iaculis. Vulputate mi sit amet mauris commodo quis imperdiet.',
		user_id: 5
	},
	{
		title: 'Arcu felis bibendum ut tristique et egestas quis.',
		content: 'Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',
		user_id: 1
	},
	{
		title: 'Ut diam quam nulla porttitor massa.',
		content: 'Dui faucibus in ornare quam viverra orci sagittis eu volutpat Bibendum ut tristique et egestas.',
		user_id: 4
	},
	{
		title: 'Massa vitae tortor condimentum lacinia quis vel.',
		content: 'Varius vel pharetra vel turpis nunc eget lorem dolor. Lacus laoreet non curabitur gravida arcu ac tortor.',
		user_id: 2
	}
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
