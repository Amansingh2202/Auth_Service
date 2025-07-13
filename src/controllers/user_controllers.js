const { ca } = require('date-fns/locale');
const UserService=require('../services/user_service');


   const userSerice=new UserService();

 const  create=async(req, res)=> {

    try{
        const user = await userSerice.create(req.body);
        return res.status(201).json({
            data: user,
            success: true,
            message: 'User created successfully',
            err: {}
        })}
        catch (error) {
            return res.status(500).json({
                data: {},
                success: false,
                message: 'Something went wrong',
                err: error
            });
        }
    }
   const signIn=async(req, res)=> {
       try{
                    const response = await userSerice.signIn(req.body.email,req.body.password);
                    return res.status(200).json({
                        data: response,
                        success: true,
                        message: 'User signed in successfully',
                        err: {}
                    }); 
       }catch(error){
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Something went wrong',
            err: error
        });

       }
    }
    const isAuthenticated=async(req, res)=> {
        try{
           const token=req.headers['x-access-token'];
           const response = await userSerice.isAuthenticated(token);
           return res.status(200).json({
               data: response,
               success: true,
               message: 'User is authenticated',
               err: {}
           });
         
        }
        catch(error){
            return res.status(500).json({
                data: {},
                success: false,
                message: 'Something went wrong',
                err: error
            });

        }
    }

 

 module.exports={
    create,
    signIn,
    isAuthenticated
 }   