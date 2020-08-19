import ApolloClient, { DocumentNode } from "apollo-boost";
import gql from "graphql-tag";

const token = process.env.TOKEN;
const version = process.env.VERSION;

export class ApiService {
  public client: any;

  constructor() {
    this.client = new ApolloClient({
      uri: "https://gapi.storyblok.com/v1/api",
      headers: {
        token: token,
        version:version
      },
    });
  }

  public gql(query: string): DocumentNode {
    return gql`
      ${query}
    `;
  }
}
