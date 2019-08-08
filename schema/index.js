const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type Blog {
    _id: ID!
    photo: String!
    title: String!
    description: String!
    created: String!
}

input BlogInput {
    photo: String!
    title: String!
    description: String!
    created: String!
}

type Project {
    _id: ID!
    title: String!
    url: String!
    description: String!
    created: String!
    codeLocation: String
    sitePreview: String
    fullScreenPhoto: String
}

input ProjectInput {
    title: String!
    url: String!
    description: String!
    created: String!
    codeLocation: String
    sitePreview: String
    fullScreenPhoto: String
}

type RootQuery {
    blogs: [Blog!]!
    projects: [Project!]!
}

type RootMutation {
    createBlog(blogInput: BlogInput): Blog
    createProject(projectInput: ProjectInput): Project
    deleteBlog(blogId: String!): [Blog!]
    deleteProjects(projectId: String!): [Project!]
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);
