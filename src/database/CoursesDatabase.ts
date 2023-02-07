import { ICoursesDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class CoursesDatabase extends BaseDatabase{
    public static TABLE_COURSES = "courses"

    public async findCourses(){

        const coursesDB: ICoursesDB[] = await BaseDatabase
        .connection(CoursesDatabase.TABLE_COURSES)
        return coursesDB
    }

    public async insertCourse(newCourseDB: ICoursesDB) {
        await BaseDatabase
            .connection(CoursesDatabase.TABLE_COURSES)
            .insert(newCourseDB)
    }

    public async findCoursesById(id: string) {
        const [ courseDB ]: ICoursesDB[] | undefined[] = await BaseDatabase
            .connection(CoursesDatabase.TABLE_COURSES)
            .where({ id })

        return courseDB
    }

    public async updateCoursesById(id: string, newCourse: any){
        await BaseDatabase
        .connection(CoursesDatabase.TABLE_COURSES)
        .update({
            id:newCourse.id,
            name:newCourse.name,
            lessons: newCourse.lessons
        })
        .where({id})
    }

    public async deleteCoursesByid(id:string) {
        await BaseDatabase
        .connection(CoursesDatabase.TABLE_COURSES)
        .del()
        .where({id})
        
    }
}
