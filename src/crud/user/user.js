import {REST_REQUEST} from "../../consts/Events"
import {REST_URL as url, SOCKET as socket} from "../../consts/URLS"
import {TOKEN} from "src/consts/data"

export const updateEducation = (educationId, formValues,handleResult) =>{

    socket.emit(REST_REQUEST,
    {
      method:'patch',
      url:`${url}/users/educations/${educationId}/`,
      data:formValues,
      result:`user-education-update/${educationId}`,
      token:TOKEN
    })

    socket.on(`user-education-update/${educationId}`,(res)=>{
      if(res.detail){
        handleResult( {error:true,detail:res.detail});
      }else{
        handleResult(res);
      }
    })  
}

export const createEducation = (educationId, formValues, handleResult) =>{
  
}

export const deleteEducation = (educationId, formValues, handleResult) =>{
  
}

//---------------------------------------------------------------------//

export const updateResearch = (researchId, formValues, handleResult) =>{

}

export const createResearch = (researchId, formValues, handleResult) =>{
  
}

export const deleteResearch = (researchId, formValues, handleResult) =>{
  
}

export const getUserEducations = (userId, handleResult) =>{
  socket.emit(REST_REQUEST, 
    {
    method: "get",
    url:`${url}/users/educations/`,
    result: "/users/educations/get",
    token: TOKEN,
    }
  );

  socket.on("/users/educations/get",(res)=>{
    if(res.detail) {
      handleResult( {error:true,detail:res.detail});
    }
    handleResult(res);
  })
}

export const getUserResearches = (userId, handleResult) =>{
  socket.emit(REST_REQUEST, 
    {
    method: "get",
    url:`${url}/users/researches/`,
    result: "/users/researches/get",
    token: TOKEN,
    }
  );

  socket.on("/users/researches/get",(res)=>{
    if(res.detail) {
      handleResult( {error:true,detail:res.detail});
    }
    handleResult(res);
  })
}

export const getUser = (userId, handleResult) => {
  socket.emit(REST_REQUEST,
    {
      method: "get",
      url: `${url}/users/${userId}/`,
      result: "/users/{id}/-get",
      token: TOKEN,
    }
  );

  socket.on("/users/{id}/-get", (res) => {
    if (res.detail) {
      // TODO mohsen: handle error
      return false
    }
    handleResult(res)
  });
};

export const updateUser = (formValues, userId, updateStateForView, hideEdit) => {
  let isLoading = false;
  const emitting = () => {
    isLoading = true;
    socket.emit(REST_REQUEST, {
      method: "patch",
      url: `${url}/users/${userId}/`,
      result: `updateUser-patch-${userId}`,
      token: TOKEN,
      data: {
        "username": formValues.username,
        "first_name": formValues.first_name,
        "last_name": formValues.last_name,
        "email": formValues.email,
      }
    })
  };

  emitting();

  socket.on(`updateUser-patch-${userId}`, (res) => {
    let error = false;
    isLoading = false;
    if (res.detail) {
      error = res.detail;
    }
    updateStateForView(res, error, isLoading);
    hideEdit();
  });
};

export const updateProfile = (formValues, profileId, updateStateForView, hideEdit) => {
  let isLoading = false;
  const emitting = () => {
    isLoading = true;
    socket.emit(REST_REQUEST, {
      method: "patch",
      url: `${url}/users/profiles/${profileId}/`,
      result: `updateProfile-patch-${profileId}`,
      token: TOKEN,
      data: {
        "public_email": formValues.public_email,
        "national_code": formValues.national_code,
        "birth_date": formValues.birth_date,
        "web_site": formValues.web_site,
        "phone": formValues.phone,
        "mobile": formValues.mobile,
        "fax": formValues.fax,
        "telegram_account": formValues.telegram_account,
        "description": formValues.description,
        "profile_user": formValues.profile_user
      }
    })
  };

  emitting();

  socket.on(`updateProfile-patch-${profileId}`, (res) => {
    let error = false;
    isLoading = false;
    if (res.detail) {
      error = res.detail;
    }
    updateStateForView(res, error, isLoading);
    hideEdit();
  });
};