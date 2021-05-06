import request from '../utils/admin.util'
import {userService} from './auth.header'

let token = userService.getToken();

export async function postTeacher(teacher){
    try {
        const response = await request({
            method: 'POST',
            url: '/admin/addteacher',
            data: teacher,
            headers :
                {Authorization:
                     "Bearer " + token.token ,
                }
        })
        console.log({ response });

        const data = await response.data
        if (data.name=="MongoError" ,data.keyPattern.email== 1) {
            return true
        }
        else{
            return false
        }
    } catch (error) {
        throw (error.response || error.message)
    }
}
export async function getTeachers() {
    try {
      console.log(token.token)

const response = await request({ 
        method: 'GET',
        url: '/admin/teacherlist',
        headers :
                {Authorization:
                     "Bearer " + token.token ,
                }
      })
      console.log(token)
      const data = await response.data
      console.log(response.data)
  
      return response.data
        
    } catch (error) {
      throw (error.response || error.message)
    }
  }
export async function deleteTeacher(id){

    try {
        const response=await request ({
            method : 'DELETE',
            url:`/admin/teacherlist/${id}`,
            headers :
                {Authorization:
                     "Bearer " + token.token ,
                }
        })
        console.log({ response });

        // const data = await response.data
    } catch (error) {
        throw (error.response || error.message)
    }
}

export async function getCourses() {
    try {
      
const response = await request({ 
        method: 'GET',
        url: '/admin/courselist',
        headers :
                {Authorization:
                     "Bearer " + token.token ,
                }
      })
      console.log(token)
      const data = await response.data
      console.log(response.data)
  
      return response.data
        
    } catch (error) {
      throw (error.response || error.message)
    }
  }
  
export async function getCourse(id) {
    try {
      
const response = await request({ 
        method: 'GET',
        url: `/admin/coursechapters/:coursename/${id}`,
        headers :
                {Authorization:
                     "Bearer " + token.token ,
                }
      })
      console.log(token)
      const data = await response.data
      console.log(response.data)
  
      return response.data
        
    } catch (error) {
      throw (error.response || error.message)
    }
  }
  export async function deleteCourse(id){

    try {
        const response=await request ({
            method : 'DELETE',
            url:`/admin/courselist/${id}`,
            headers :
                {Authorization:
                     "Bearer " + token.token ,
                }
        })
        console.log({ response });

        // const data = await response.data
    } catch (error) {
        throw (error.response || error.message)
    }
}

export async function getStudents() {
    try {
      
const response = await request({ 
        method: 'GET',
        url: '/admin/studentlist',
        headers :
                {Authorization:
                     "Bearer " + token.token ,
                }
      })
      console.log(token)
      const data = await response.data
      console.log(response.data)
  
      return response.data
        
    } catch (error) {
      throw (error.response || error.message)
    }
  }
  export async function deleteStudent(id){

    try {
        const response=await request ({
            method : 'DELETE',
            url:`/admin/studentlist/${id}`,
            headers :
                {Authorization:
                     "Bearer " + token.token ,
                }
        })
        console.log({ response });

        // const data = await response.data
    } catch (error) {
        throw (error.response || error.message)
    }
}