const { gql } = require("apollo-server");

module.exports = gql`
  type City {
    id: ID!
    name: String!
    item: String!
    method: String!
    condition: String!
    period: String!
    places: [Place]!
  }

  type Place {
    id: ID!
    cityId: String!
    name: String!
    phone: String!
    address: String!
    pos: [String]!
    cities: [City]!
  }

  type Restroom {
    id: ID!
    type: String
    name: String
    address: String
    unisex: String
    management_agency: String
    management_phone: String
    checked: String
    crime: String
    checkedInfo: [CheckedInfo]
    crimeInfo: [CrimeInfo]
  }

  type CheckedInfo {
    id: ID
    restroomId: String
    checked_date: String
    checked_result: String
  }

  type CrimeInfo {
    id: ID
    restroom_id: String
    crime_date: String
    crime_camera: String
  }

  type Query {
    cities(name: String!): [City]!
    places(id: ID!): Place
    restrooms(address: String!): [Restroom]
    crimeInfo: CrimeInfo
    checkedInfo(restroomId: String): [CheckedInfo]
  }
`;
