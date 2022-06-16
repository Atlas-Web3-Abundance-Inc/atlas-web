import { gql } from 'apollo-server-micro';

const typeDefs = gql`
#Users
type User{
    id: ID
    firstName: String
    lastName: String
    phone: String 
    company: String
    address: String
    email: String 
    twitterLink: String
    linkedinLink: String 
    facebookLink: String 
    landlordAddress:String
    landlordEmail: String
    landlordPhone: String 
}

input UserInput{
    firstName: String!
    lastName: String!
    phone: String! 
    company: String!
    address: String!
    email: String! 
    twitterLink: String!
    linkedinLink: String! 
    facebookLink: String! 
    landlordAddress:String!
    landlordEmail: String!
    landlordPhone: String! 
}

type Query{
    getUsers: [User]
    getUser(id:ID!): User
}

type Mutation{
    #User
    newUser(input: UserInput):User
}
`

module.exports = typeDefs