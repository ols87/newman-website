import ApolloClient, { DocumentNode } from "apollo-boost";
import gql from "graphql-tag";

export class ApiService {
  public client: any;

  constructor() {
    this.client = new ApolloClient({
      uri: "https://gapi.storyblok.com/v1/api",
      headers:{
        token:"InWwaOQ9Br8jsKZwcCOybwtt",
        version:"draft"
      }
    });
  }

  public gql(query: string): DocumentNode {
    return gql`
      ${query}
    `;
  }
}