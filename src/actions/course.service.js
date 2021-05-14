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
export async function getImg(imgPath){
    getFile({
    path:imgPath


   })
    .then((response) => {
      console.log(response.data);
      setImageState(response.data)
    })
    .catch((error) => {
      console.log(error);
    });

  
  }
