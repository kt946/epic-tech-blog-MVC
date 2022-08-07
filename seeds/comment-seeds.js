const { Comment } = require('../models');

const commentdata = [
	{
		comment_text: 'Nunc rhoncus dui vel sem. Tristique magna sit amet purus.',
		user_id: 1,
		post_id: 2
	},
	{
		comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
		user_id: 3,
		post_id: 6
	},
	{
		comment_text: 'Aliquam erat volutpat. In congue. Diam in arcu cursus euismod quis viverra nibh.',
		user_id: 4,
		post_id: 7
	},
	{
		comment_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
		user_id: 5,
		post_id: 3
	},
	{
		comment_text: 'In hac habitasse platea dictumst.',
		user_id: 5,
		post_id: 5
	},
	{
		comment_text: 'Vivamus vestibulum sagittis sapien. Duis ultricies lacus sed turpis tincidunt id aliquet risus.',
		user_id: 3,
		post_id: 2
	},
	{
		comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
		user_id: 2,
		post_id: 4
	},
	{
		comment_text: 'Sed vel enim sit amet nunc viverra dapibus. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor.',
		user_id: 1,
		post_id: 4
	},
	{
		comment_text: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
		user_id: 2,
		post_id: 7
	},
	{
		comment_text: 'Morbi a ipsum. Porttitor leo a diam sollicitudin tempor. Ac tincidunt vitae semper quis lectus nulla at.',
		user_id: 3,
		post_id: 1
	},
	{
		comment_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
		user_id: 5,
		post_id: 1
	},
	{
		comment_text: 'Donec ut mauris eget massa tempor convallis.',
		user_id: 1,
		post_id: 6
	},
	{
		comment_text:
		'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
		user_id: 3,
		post_id: 3
	},
	{
		comment_text:
		'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
		user_id: 5,
		post_id: 5
	},
	{
		comment_text: 'Dictum non consectetur a erat nam at lectus. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Elit sed vulputate mi sit amet mauris.',
		user_id: 1,
		post_id: 4
	},
	{
		comment_text: 'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Orci a scelerisque purus semper eget.',
		user_id: 4,
		post_id: 2
	},
	{
		comment_text:
		'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
		user_id: 3,
		post_id: 7
	},
	{
		comment_text:
		'Diam vulputate ut pharetra sit. Vitae auctor eu augue ut lectus arcu bibendum at. Gravida arcu ac tortor dignissim convallis aenean.',
		user_id: 4,
		post_id: 1
	},
	{
		comment_text:
		'Consectetur libero id faucibus nisl tincidunt eget. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Ipsum dolor sit amet consectetur.',
		user_id: 5,
		post_id: 1
	}
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
