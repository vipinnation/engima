

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
        type: DataType.STRING,
        allowNull: false,
        unique: true
    },
    content: {
        type: DataType.STRING,
        allowNull: false
    },
    status: {
        type: DataType.ENUM,
        defaultValue: "active",
        values: ['active', 'inactive']
    }
}, {
    timestamps: true,
    tableName: 'posts'
})

export default Blog