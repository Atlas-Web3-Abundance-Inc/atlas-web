const User = require('./models/user.ts')

const resolvers = {
    Query: {
        //users
        getUsers: async()=>{
            try{
                const users = await User.find({})
                return users
            } catch (e){
                console.log(e)
            }
        },
        getUser: async(_,{id})=>{
            const user = await User.findById(id)

            if( !user) throw new Error ("User not found")

            return user
        }
    },


    Mutation: {
        newUser: async (_, {input})=>{
            try{
                const user = new User(input)
                const res = await user.save()

                return res
            } catch (e){
                console.log(e)
            }
        }
    }
}

module.exports = resolvers
