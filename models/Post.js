const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create Post model
class Post extends Model {}

// create fields and columns for Post model
Post.init(
    {
        // id of post
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // title of post
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // content of post
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // foreign key that identifies the user who created the post
        // references user model and id column
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {   
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;