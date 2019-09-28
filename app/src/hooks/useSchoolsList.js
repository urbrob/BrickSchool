import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const SCHOOLS_QUERY = gql`
  query getSchools($quantity: Int) {
    schools(first: $quantity) {
      edges {
        node {
          id
          name
          city
          typeSchool
          voivodship
          county
          community
          location
          specialization
          isPublic
        }
      }
    }
  }
`;

const useSchoolsList = quantity => {
  const { data, loading } = useQuery(SCHOOLS_QUERY, {
    variables: { quantity }
  });

  console.log("data: ", data, loading);

  const schools = !loading ? data.schools.edges : [];

  return [schools.map(s => s.node), loading];
};

export default useSchoolsList;
