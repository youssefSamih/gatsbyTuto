import React from "react";

import Layout from "../components/layout";
import { isLoggedIn, getUser } from "../services/auth";
import { Link } from "gatsby";

export default () => (
  <Layout>
    <h1>Hello {isLoggedIn() ? getUser().name : 'world'}! </h1>
    <p>
      {isLoggedIn() ? (
        <>
          You are logged in so check your {" "}
          <Link to="/app/profile">profile</Link>
        </>
      ) : (
        <>
          You should <Link to="/app/login">log in</Link> to see restricted content
        </>
      )}
    </p>
  </Layout>
)
