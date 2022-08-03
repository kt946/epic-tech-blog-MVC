// import Model class, DataTypes object, sequelize and bcrypt
const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

// create User model
class User extends Model {
    // method to run on instance data (per user) to check password
    checkPassword(loginPw) {
        // pass and compare plaintext password with object's hashed password
        // if passwords match, return true, else return false
        return bcrypt.compareSync(loginPw, this.password);
    }
}

// define table columns and configuration
User.init(
    {
        // TABLE COLUMN DEFINITIONS
        // id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // username column
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            // no duplicate usernames
            unique: true
        },
        // password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // password must be at least four characters long
                len: [4]
            }
        }
    },
    {
        // TABLE CONFIGURATION OPTIONS

        hooks: {
            // asynchronous function to hash passwords before creating new user
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            }
        },

         sequelize,
         timestamps: false,
         freezeTableName: true,
         underscored: true,
         modelName: 'user'
    }
);

module.exports = User;