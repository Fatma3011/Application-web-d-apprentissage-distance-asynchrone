import request from '../utils/student.util'

export async function getAllCourses() {
    try {
      const response = await request({ 
        method: 'GET',
        url: '/app/home/courses',
      })
     
      console.log(response)
  
      return response
    } catch (error) {
      throw (error.response || error.message)
    }
  }
