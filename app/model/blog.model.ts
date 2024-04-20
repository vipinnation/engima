

import { DataType } from 'sequelize-typescript';
import sequelize from '../../db';


const Blog = sequelize.define("blog", {
    id: {
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    title: {
        type: DataType.TEXT('long'),
        allowNull: false,

    },
    content: {
        type: DataType.TEXT('long'),
        allowNull: false
    },
    status: {
        type: DataType.ENUM,
        defaultValue: "active",
        values: ['active', 'inactive']
    },
    slug: {
        type: DataType.STRING,
        unique: true
    }
}, {
    timestamps: true,
    tableName: 'blogs'
})

export default Blog