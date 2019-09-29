// tslint:disable
// this is an auto generated file. This will be overwritten

export const getEmployeeDetails = `query GetEmployeeDetails($id: ID!) {
  getEmployeeDetails(id: $id) {
    avatar
    birthPlace
    description
    hobbies
    id
    location
    name
    role
    userId
  }
}
`
export const listEmployeeDetailss = `query ListEmployeeDetailss(
  $filter: ModelEmployeeDetailsFilterInput
  $limit: Int
  $nextToken: String
) {
  listEmployeeDetailss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      avatar
      birthPlace
      description
      hobbies
      id
      location
      name
      role
      userId
    }
    nextToken
  }
}
`
