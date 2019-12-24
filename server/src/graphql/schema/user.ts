import { gql } from 'apollo-server-express';

export default gql`

    extend type Query {
        self: User
    }

    type User {
        id: ID!
        firstName: String
        lastName: String
        email: String
        phone: String
        onboarded: Boolean
    }

`;
