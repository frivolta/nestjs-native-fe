module.exports = {
    client: { 
      includes: ["./screens/**/*.{tsx,ts}"],
      tagName: "gql",
      service:{
        name: "sharecoin-be",
        url: "http://localhost:4000/graphql"
      }
    },
  };