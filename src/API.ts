/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateEmployeeDetailsInput = {
  avatar: string
  birthPlace: string
  description: string
  hobbies?: Array<string | null> | null
  id?: string | null
  location: string
  name: string
  role: string
  userId?: string | null
}

export type UpdateEmployeeDetailsInput = {
  avatar?: string | null
  birthPlace?: string | null
  description?: string | null
  hobbies?: Array<string | null> | null
  id: string
  location?: string | null
  name?: string | null
  role?: string | null
  userId?: string | null
}

export type DeleteEmployeeDetailsInput = {
  id?: string | null
}

export type ModelEmployeeDetailsFilterInput = {
  avatar?: ModelStringFilterInput | null
  birthPlace?: ModelStringFilterInput | null
  description?: ModelStringFilterInput | null
  hobbies?: ModelStringFilterInput | null
  id?: ModelIDFilterInput | null
  location?: ModelStringFilterInput | null
  name?: ModelStringFilterInput | null
  role?: ModelStringFilterInput | null
  userId?: ModelIDFilterInput | null
  and?: Array<ModelEmployeeDetailsFilterInput | null> | null
  or?: Array<ModelEmployeeDetailsFilterInput | null> | null
  not?: ModelEmployeeDetailsFilterInput | null
}

export type ModelStringFilterInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
}

export type ModelIDFilterInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
}

export type CreateEmployeeDetailsMutationVariables = {
  input: CreateEmployeeDetailsInput
}

export type CreateEmployeeDetailsMutation = {
  createEmployeeDetails: {
    __typename: 'EmployeeDetails'
    avatar: string
    birthPlace: string
    description: string
    hobbies: Array<string | null> | null
    id: string
    location: string
    name: string
    role: string
    userId: string | null
  } | null
}

export type UpdateEmployeeDetailsMutationVariables = {
  input: UpdateEmployeeDetailsInput
}

export type UpdateEmployeeDetailsMutation = {
  updateEmployeeDetails: {
    __typename: 'EmployeeDetails'
    avatar: string
    birthPlace: string
    description: string
    hobbies: Array<string | null> | null
    id: string
    location: string
    name: string
    role: string
    userId: string | null
  } | null
}

export type DeleteEmployeeDetailsMutationVariables = {
  input: DeleteEmployeeDetailsInput
}

export type DeleteEmployeeDetailsMutation = {
  deleteEmployeeDetails: {
    __typename: 'EmployeeDetails'
    avatar: string
    birthPlace: string
    description: string
    hobbies: Array<string | null> | null
    id: string
    location: string
    name: string
    role: string
    userId: string | null
  } | null
}

export type GetEmployeeDetailsQueryVariables = {
  id: string
}

export type GetEmployeeDetailsQuery = {
  getEmployeeDetails: {
    __typename: 'EmployeeDetails'
    avatar: string
    birthPlace: string
    description: string
    hobbies: Array<string | null> | null
    id: string
    location: string
    name: string
    role: string
    userId: string | null
  } | null
}

export type ListEmployeeDetailssQueryVariables = {
  filter?: ModelEmployeeDetailsFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListEmployeeDetailssQuery = {
  listEmployeeDetailss: {
    __typename: 'ModelEmployeeDetailsConnection'
    items: Array<{
      __typename: 'EmployeeDetails'
      avatar: string
      birthPlace: string
      description: string
      hobbies: Array<string | null> | null
      id: string
      location: string
      name: string
      role: string
      userId: string | null
    } | null> | null
    nextToken: string | null
  } | null
}

export type OnCreateEmployeeDetailsSubscription = {
  onCreateEmployeeDetails: {
    __typename: 'EmployeeDetails'
    avatar: string
    birthPlace: string
    description: string
    hobbies: Array<string | null> | null
    id: string
    location: string
    name: string
    role: string
    userId: string | null
  } | null
}

export type OnUpdateEmployeeDetailsSubscription = {
  onUpdateEmployeeDetails: {
    __typename: 'EmployeeDetails'
    avatar: string
    birthPlace: string
    description: string
    hobbies: Array<string | null> | null
    id: string
    location: string
    name: string
    role: string
    userId: string | null
  } | null
}

export type OnDeleteEmployeeDetailsSubscription = {
  onDeleteEmployeeDetails: {
    __typename: 'EmployeeDetails'
    avatar: string
    birthPlace: string
    description: string
    hobbies: Array<string | null> | null
    id: string
    location: string
    name: string
    role: string
    userId: string | null
  } | null
}
