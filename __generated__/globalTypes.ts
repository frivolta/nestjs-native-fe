/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum UserRole {
  Admin = "Admin",
  Client = "Client",
}

export interface CreateAccountInput {
  email: string;
  password: string;
  role: UserRole;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
