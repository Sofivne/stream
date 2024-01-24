import {DataTypes, Model} from 'sequelize';
import { sequelize } from "../config/initSequelize.js";

export class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password_h: {
        type: DataTypes.STRING
    },
    salt: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false
});

sequelize.sync({ alter: false })
    .then(() => {
        console.log('User model is synchronized with the users table.');
    })
    .catch(err => {
        console.error('Error synchronizing the User model:', err);
    });
