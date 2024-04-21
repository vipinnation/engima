import { DataType } from "sequelize-typescript";
import sequelize from "../../db";
import Blog from "./blog.model";

const Comment = sequelize.define("comment", {
    id: {
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    content: {
        type: DataType.TEXT('long'),
        allowNull: false
    },
    user: {
        type: DataType.STRING,
        allowNull: false
    },
    isEdited: {
        type: DataType.BOOLEAN,
        defaultValue: false
    },
}, {
    timestamps: true,
    tableName: 'comments'
});

export default Comment