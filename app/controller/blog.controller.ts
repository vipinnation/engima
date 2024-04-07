import { Request, Response } from 'express'
import Logger from '../../library/logger'
import { ServerResponse } from '../../library/server-response'


const create = async (req: Request, res: Response) => {
    try {

    } catch (error) {
        Logger.error(error)
        ServerResponse.server_error(res, { msg: "Internal server error", error })
    }
}

const get = async (req: Request, res: Response) => {
    try {

    } catch (error) {
        Logger.error(error)
        ServerResponse.server_error(res, { msg: "Internal server error", error })
    }
}

const getById = async (req: Request, res: Response) => {
    try {

    } catch (error) {
        Logger.error(error)
        ServerResponse.server_error(res, { msg: "Internal server error", error })
    }
}

const update = async (req: Request, res: Response) => {
    try {

    } catch (error) {
        Logger.error(error)
        ServerResponse.server_error(res, { msg: "Internal server error", error })
    }
}

const remove = async (req: Request, res: Response) => {
    try {

    } catch (error) {
        Logger.error(error)
        ServerResponse.server_error(res, { msg: "Internal server error", error })
    }
}



const BlogController = { create, update, get, getById, remove }

export default BlogController