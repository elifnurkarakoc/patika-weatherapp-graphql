import { gql } from "@apollo/client";

//Weather information from Grafql is accessed by giving the name of the city.
export const GET_CITY_BY_NAME = gql`
  query getCityByName($name: String!) {
    getCityByName(name: $name) {
      name
      country
      weather {
        summary {
          description
          icon
        }
        temperature {
          actual
        }
        wind {
          speed
        }
        clouds {
          humidity
        }
      }
    }
  }
`;
