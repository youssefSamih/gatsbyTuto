import React from 'react';
import Layout from "../components/layout"
import { graphql } from "gatsby";

const about = ({ data }) => {
  return (
    <Layout>
      <h1>{ data.site.siteMetadata.title }</h1>
      <p>
        We're the only site running on your computer dedicated to showing the best
        photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  );
}

export const query = graphql`
  query{
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default about;
