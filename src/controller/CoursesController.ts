import { CoursesBusiness } from "../business/CoursesBusiness";
import { Request, Response } from "express"
import { BaseError } from "../errors/BaseErrors";

export class CoursesController{

    public getCourses = async(req:Request, res:Response)=>{
        try {
            const coursesBusines = new CoursesBusiness()
            const resultGet = await coursesBusines.getCourses()
            res.status(200).send(resultGet)            
        } catch (error) {
            console.log(error)
    
            if(error instanceof BaseError){
                res.status(error.statusCode) .send(error.message)
            } else{
                res.status(500) .send("Erro inesperado")
            }
        }
    }

    public postCourse =async (req:Request, res:Response) => {

        try {
            const datas = {
                id:req.body.id,
                name: req.body.name,
                lessons:req.body.lessons
            }

            const coursesBusiness = new CoursesBusiness()
            const resultPost = await coursesBusiness.postCourses(datas)
            
            res.status(201).send(resultPost)

        } catch (error) {
            console.log(error)
            if(error instanceof BaseError){
                res.status(error.statusCode) .send(error.message)
            } else{
                res.status(500) .send("Erro inesperado")
            }
        }
        
    }

    public editCourse = async (req:Request, res: Response)=>{
      try {
            const datas = {
            id:req.params.id,
            name: req.body.name,
            lessons:req.body.lessons
        }

        const coursesBusiness = new CoursesBusiness()
        const resultEdit = await coursesBusiness.putCourses(datas)

        res.status(200).send(resultEdit)

      }  catch (error) {
            console.log(error)
            if(error instanceof BaseError){
                res.status(error.statusCode) .send(error.message)
            } else{
                res.status(500) .send("Erro inesperado")
            }
        }
    }

    public deleteCourse = async (req:Request, res: Response) =>{
        try {
            const id = req.params.id

            const coursesBusines = new CoursesBusiness()
            const resultDelete = await coursesBusines.deletedCourses(id)
            res.status(200).send(resultDelete)            
        } catch (error) {
            console.log(error)
    
            if(error instanceof BaseError){
                res.status(error.statusCode) .send(error.message)
            } else{
                res.status(500) .send("Erro inesperado")
            }
        }
    }

}