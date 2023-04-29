import { schema } from '@ioc:Adonis/Core/Validator'

enum RoleType {
  ADMIN = 1,
  EMPLOYEE = 2,
}

{
  role_Type: schema.enum(Object.values(RoleType))
}
