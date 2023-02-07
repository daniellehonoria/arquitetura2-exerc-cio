import { CoursesDatabase } from "../database/CoursesDatabase"
import { ICoursesDB } from "../types"
import { Courses } from "../models/Courses"
import { BadRequestError } from "../errors/BadRequest"

export class CoursesBusiness{
    public getCourses = async()=>{

        const coursesDatabase = new CoursesDatabase()
        const coursesDB: ICoursesDB[] = await coursesDatabase.findCourses()

        const courses = coursesDB.map((coursesDB)=> new Courses(
            coursesDB.id,
            coursesDB.name,
            coursesDB.lessons
        )) 
        return courses
    }

    public postCourses = async(datas:any) =>{
        const {id, name, lessons} = datas

        if (typeof id !== "string" || typeof name !=="string" || typeof lessons !== "number"){
            throw new BadRequestError("Name e id devem ser string, lessons deve ser number.")
        }
        const coursesDatabase = new CoursesDatabase()
        const coursesExists = await coursesDatabase.findCoursesById(id)
        
        if(coursesExists){
            throw new BadRequestError("Id já existe.")
        }
        const newCourse = new Courses(
            id,
            name,
            lessons
        )
        const newCourseDB :  ICoursesDB ={
            id: newCourse.getId(),
            name: newCourse.getName(),
            lessons: newCourse.getLessons()
        }
        await coursesDatabase.insertCourse(newCourseDB)

        const result = {
            message: "Cadastro realizado com sucesso",
            course: newCourse
        }

        return result
    }
public putCourses = async(datas:any)=>{
    const {id, name, lessons} = datas

    if (typeof id !== "string" || typeof name !=="string" || typeof lessons !== "number"){
        throw new BadRequestError("Name e id devem ser string, lessons deve ser number.")
    }
    const coursesDatabase = new CoursesDatabase()
    const coursesExists = await coursesDatabase.findCoursesById(id)

    if(!coursesExists){
        throw new BadRequestError("Id não encontrado.")
    }
    
    const newCourse = new Courses(
     id,
     name,
    lessons
    )

    await coursesDatabase.updateCoursesById(id, newCourse)

    const result = {
        message: "Dados atualizados com sucesso",
        course: newCourse
    }
    return result

}
public deletedCourses = async(id:string)=>{
    if (typeof id !== "string") {
        throw new BadRequestError("'id' deve ser string");
    }
    const coursesDatabase = new CoursesDatabase()
    const coursesExists = await coursesDatabase.findCoursesById(id)     

    if(!coursesExists){
        throw new BadRequestError("Id não encontrado.")
    } 
    await coursesDatabase.deleteCoursesByid(id)
    return ("Curso deletado.")
}
}