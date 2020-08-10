import ApolloClient, { DocumentNode } from "apollo-boost";
import gql from "graphql-tag";

const ENV = process.env.NODE_ENV;

const token = ENV === "production" ? process.env.PUBLISH_TOKEN : process.env.PREVIEW_TOKEN;
const version = ENV ===  "production" ? process.env.PUBLISH_VERSION : process.env.PREVIEW_VERSION;

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
