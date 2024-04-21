import { DataType } from "sequelize-typescript";
import sequelize from "../../db";

const User = sequelize.define("user", {
    id: {
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    full_name: {
        type: DataType.STRING,
        allowNull: false
    },
    email: {
        type: DataType.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataType.STRING,
        allowNull: false
    },
    role: {
        type: DataType.ENUM,
        values: ['ROLE_ADMIN', 'ROLE_USER'],
        defaultValue: 'ROLE_USER'
    },
    avatar: {
        type: DataType.STRING,
        defaultValue: null
    },
    bio: {
        type: DataType.TEXT('long'),
        defaultValue: null
    },
    socails: {
        type: DataType.JSON
    },
    phone_number: {
        type: DataType.INTEGER
    },
    is_verified: {
        type: DataType.BOOLEAN,
        defaultValue: false
    },
    is_deleted: {
        type: DataType.BOOLEAN,
        defaultValue: false
    }

}, {
    timestamps: true,
    tableName: 'users'
});


export default User