import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

//api to add video



export const allVideoApi = async (reqBody)=>{
    return await commonApi('POST',`${serverUrl}/allVideos`, reqBody)
}


//api to get all video

export const getAllVideoApi = async()=>{
    return await commonApi('GET',`${serverUrl}/allVideos`,"")
}


//api to delete a video

export const deletVideoApi = async(id)=>{
    return await commonApi('DELETE', `${serverUrl}/allVideos/${id}`,{})
}

//api to add video to watch history

export const addVideoHistory = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/history`, reqBody)
}

//api to get all video from history

export const getVideoHistoryApi = async()=>{
    return await commonApi('GET',`${serverUrl}/History`,"")
}

//api to delete a video from history
export const deleteVideoHistory = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/history/${id}`,{})
}

//api to add category

export const addCategoryApi =async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/Category`, reqBody)
}

//api to get all category

export const getAllCategory = async()=>{
    return await commonApi('GET',`${serverUrl}/Category`)
}

//api to delete Category

export const removeCategoryApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/Category/${id}`,{})
}

//api to update category
export const UpdateCategoryApi = async(id, reqBody)=>{
    return await commonApi('PUT',`${serverUrl}/category/${id}`,reqBody)
}
