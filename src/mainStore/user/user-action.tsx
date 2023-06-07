import { saveUser } from "./user.store";

 export const loginUser = (userDetails: any , Navigate: any) => {


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
                const {userData , status , msg} = await userRes.json();

                if(status === 200){

                    console.log('userData' , userData)
                   dispatch(saveUser({userData}))
                   if(userData.type ==="user"){
                    Navigate('/user')
                   }else if(userData.type === "doctor") {
                    Navigate('/doctor')
                   }else if(userData.type === "admin") {
                    Navigate('/admin')
                   }else {
                       Navigate('/')
                   }

               }else {
                   console.log('res err' , msg)
                }
   
             }
        
          }
      
     }


