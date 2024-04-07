import { Request, Response } from 'express'
import Logger from '../../library/logger'
import { ServerResponse } from '../../library/server-response'
import Blog from '../model/blog.model'


const create = async (req: Request, res: Response) => {
    try {

        req.body.title = JSON.stringify(req.body.title)
        req.body.content = JSON.stringify(req.body.content)
        const blog = await Blog.create(req.body);
        ServerResponse.server_ok(res, { msg: "blog added successfully", blog })

    } catch (error) {
        Logger.error(error)
        ServerResponse.server_error(res, { msg: "Internal server error", error })
    }
}

const get = async (req: Request, res: Response) => {
    try {

        let blogs = await Blog.findAll({})

        ServerResponse.server_ok(res, { blogs })

    } catch (error) {
        Logger.error(error)
        ServerResponse.server_error(res, { msg: "Internal server error", error })
    }
}

const getById = async (req: Request, res: Response) => {
    try {

        let blog = await Blog.findByPk(req.params.id)
        if (!blog) return ServerResponse.bad_request(res, { msg: "Blog not found" })

        ServerResponse.server_ok(res, { blog })

    } catch (error) {
        Logger.error(error)
        ServerResponse.server_error(res, { msg: "Internal server error", error })
    }
}

const update = async (req: Request, res: Response) => {
    try {
        let blog = await Blog.findByPk(req.params.id)
        if (!blog) return ServerResponse.bad_request(res, { msg: "Blog not found" })

        ServerResponse.server_ok(res, { blog })

    } catch (error) {
        Logger.error(error)
        ServerResponse.server_error(res, { msg: "Internal server error", error })
    }
}

const remove = async (req: Request, res: Response) => {
    try {
        let blog = await Blog.findByPk(req.params.id)
        if (!blog) return ServerResponse.bad_request(res, { msg: "Blog not found" })

        ServerResponse.server_ok(res, { blog })

    } catch (error) {
        Logger.error(error)
        ServerResponse.server_error(res, { msg: "Internal server error", error })
    }
}



const BlogController = { create, update, get, getById, remove }

export default BlogController