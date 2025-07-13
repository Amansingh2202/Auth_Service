const {User}= require('../models');

class UserRepository {

    async create(data){
        try{
            const user = await User.create(data);
            return user;
        }
        catch(error){

        }
    }
    async destroy(userid){
        try{
            const user = await User.destroy({
                where: {
                    id: userid
                }
            });
            return user;
        }
        catch(error){
            throw error;
        }
    }
    async getByID(userID)
    {
        try{
            const user = await User.findByPk(userID,{
                attributes: ['id', 'email'] //this will only going to give us these attributes among all the attributes of user model
            });
            return user;
        }
        catch(error){
            console.log("something went wrong in user repository while fetching user by ID");
            throw error;
        }
    }
           
    async getByEmail(userEmail){
        try{
            const user = await User.findOne({
                where: {
                    email: userEmail
                },
             // this will only give us these attributes among all the attributes of user model
            });

            return user;
        }
        catch(error){
            console.log("something went wrong in user service while fetching user by email");
            throw error;
        }
    }
}

module.exports=UserRepository;