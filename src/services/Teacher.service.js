import request from '../utils/admin.util'

export async function postTeacher(teacher){
    try {
        const response = await request({
            method: 'POST',
            url: '/admin/addteacher',
            data: teacher
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
      const response = await request({ 
        method: 'GET',
        url: '/admin/teacherlist'
      })
  
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
        })
        console.log({ response });

        // const data = await response.data
    } catch (error) {
        throw (error.response || error.message)
    }
}
// export async function openSession(admin){
//     try {
//         const response = await request({
//             method: 'POST',
//             url: '/',
//             data: admin
//         })
//         console.log({ response });

//         // const data = await response.data
//         // if (data.name=="MongoError" ,data.keyPattern.email== 1) {
//         //     return true
//         // }
//         // else{
//         //     return false
//         // }
//         return response

//     } catch (error) {
//         throw (error.response || error.message)
//     }
// }
