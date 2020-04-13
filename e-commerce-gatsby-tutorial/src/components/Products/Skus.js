import React from 'react';
import { graphql, StaticQuery } from "gatsby";
import { loadStripe } from '@stripe/stripe-js';

import SkuCard from './SkuCard';

const containerStyles = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  padding: "1rem 0 1rem 0"
}

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY);

export default props => (
  <StaticQuery 
    query={graphql`
    query SkusForProduct {
        skus: allStripeSku {
          edges {
            node {
              id
              currency
              price
              attributes {
                name
              }
            }
          }
        }
      }
    `}
    render={({ skus }) => (
      <div style={containerStyles}>
        {skus.edges.map(({ node: sku }) => (
          <SkuCard key={sku.id} sku={sku} stripePromise={stripePromise} />
        ))}
      </div>
    )}
  />
);
