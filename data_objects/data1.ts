export type Root = Root2[]

export interface Root2 {
  username: string
  password: string
  expected: string
}

export interface NewSocialUser{
  firstname:string,
  lastname:string,
  email:string
}

export interface NewSocialUser2{
  firstname?:string,
  lastname?:string,
  email?:string
  username?:string
  gender?:string
}