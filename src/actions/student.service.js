import React from 'react'
import request from '../utils/student.util'
import {getToken} from './Auth.service'
let token = getToken();
//gettinhInfo
export async function getInfo(idStudent){
    try {
        const response = await request({
            method: 'GET',
            url: `/app/student/myprofile/${idStudent}`,
            headers: { Authorization: "Bearer " + token }

        })
        console.log(response);
        return response

    } catch (error) {
        throw (error.response || error.message)
    }
}
//UpdatinInfo
export async function updateProfile(student, idStudent) {
    try {
      console.log("debut");
      const response = await request({
        method: "POST",
        url: `/app/student/myprofile/${idStudent}`,
        data: student,
        headers: { Authorization: "Bearer " + token },
      });
      console.log({ response });
  
      return response;
  
    } catch (error) {
      throw error.response || error.message;
    }
  }