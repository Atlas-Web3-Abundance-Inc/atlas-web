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
                newUser.addressCity = args?.user.addressCity;
                newUser.addressState = args?.user.addressState;
                newUser.addressZip = args?.user.addressZip;
                newUser.firstName = args?.user.firstName;
                newUser.lastName = args?.user.lastName;
                newUser.email = args?.user.email;
                newUser.landlordEmail = args?.user.landlordEmail;
                newUser.landlordAddress = args?.user.landlordAddress;
                newUser.landlordZip = args?.user.landlordZip;
                newUser.landlordState = args?.user.landlordState;
                newUser.landlordCity = args?.user.landlordCity;
                newUser.landlordPhone = args?.user.landlordPhone;

                let res = await newUser?.save(
                    function() {
                    
                    console.log('saved:', newUser )
                });
                
                return newUser
              
            } catch (e){
                console.log('ERR',e,)
            }
        }
    }
}

module.exports= resolvers;