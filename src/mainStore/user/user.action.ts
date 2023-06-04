import { saveUser } from "./user.store";


 export const loginUser = (userDetails: any) => {

     return async(dispatch: any) => {
            const userPayload = JSON.stringify(userDetails)
             const userRes: any = await fetch ('http://localhost:3001/login' , {
              method:'post',
              headers: {
                "Content-Type": "application/json",
        
              },
              body: userPayload
             }).catch((err) => {
                 console.log('server err' , err)
             });

             if(userRes){
                const {userData , status} = await userRes.json();
                 console.log('userData' , userData.userData)
                if(status === 200){
                    dispatch(saveUser(userData))
                }else {
                   console.log('res err' , userData)
                }
   
             }
        
          }
        
     }


