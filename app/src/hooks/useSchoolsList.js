import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const SCHOOLS_QUERY = gql`
  query getSchools(
    $quantity: Int
    $filterName: String
    $filterType: String
    $filterIsPublic: Boolean
    $filterPerspectiveBadge: String
    $filterLocation: String
  ) {
    schools(
      first: $quantity
      isPublic: $filterIsPublic
      typeSchool: $filterType
      name: $filterName
      location: $filterLocation
      perspectiveBadge: $filterPerspectiveBadge
    ) {
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
          pk
          statisticsSet{
            perspectiveBadge{
              localRating
              wsk
              badge
            }
          }
        }
      }
    }
  }
`;

const useSchoolsList = (
  quantity,
  isFiltered,
  filterName,
  filterType,
  filterIsPublic,
  filterLocation
) => {
  const dupa = useQuery(SCHOOLS_QUERY, {
    variables: {
      quantity,
      filterName,
      filterType,
      filterIsPublic,
      filterLocation
    }
  });

  console.log("data: ", dupa, isFiltered, filterLocation);

  const { data, loading } = dupa;

  const schools = !loading ? data.schools.edges : [];

  console.log("schools in hook:", schools.map(s => s.node));

  return [schools.map(s => s.node), loading];
};

export default useSchoolsList;
