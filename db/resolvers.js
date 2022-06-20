import User from './models/user.js'

const resolvers = {
    Query: {
        //users
        getUsers: async()=>{
            try{
                const users = await find({})
                return users
            } catch (e){
                console.log(e)
            }
        },
        getUser: async(_,{id})=>{
            const user = await findById(id)

            if( !user) throw new Error ("User not found")

            return user
        }
    },
    Mutation: {
        newUser: async (parent, args) => {
            try{
                let newUser = new User();
                newUser.address = args?.user.address;
                newUser.firstName = args?.user.firstName;
                newUser.lastName = args?.user.lastName;
                newUser.email = args?.user.email;
                newUser.landlordEmail = args?.user.landlordEmail;
                newUser.landlordAddress = args?.user.landlordAddress;
                newUser.landlordPhone = args?.user.landlordPhone;

                let res = await newUser?.save(
                    function(err) {
                    console.log('error db! ', err);
                  })
              
            } catch (e){
                console.log('ERR',e,)
            }
        }
    }
}

module.exports= resolvers;