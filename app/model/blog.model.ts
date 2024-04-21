

import { DataType } from 'sequelize-typescript';
import sequelize from '../../db';
import Comment from './comment.model';
import User from './user.model';

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
    },
    views: {
        type: DataType.INTEGER,
        defaultValue: 0
    },
    likes: {
        type: DataType.INTEGER,
        defaultValue: 0
    },
    featuredImage: {
        type: DataType.STRING
    },
    metaDescription: {
        type: DataType.TEXT
    },
    seoKeywords: {
        type: DataType.STRING
    },
    created_by: {
        type: DataType.INTEGER
    }
}, {
    timestamps: true,
    tableName: 'blogs'
})

Blog.hasMany(Comment, { as: 'comments', foreignKey: 'blogId' });
Blog.hasOne(User, { as: "user", foreignKey: "created_by" })
export default Blog