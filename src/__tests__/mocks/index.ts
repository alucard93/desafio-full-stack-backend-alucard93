import { IUserUpdateRequest } from "../../interfaces/user/user.interface";
import { ISessionRequest } from "../../interfaces/session/sessions.interface";
import { IRegisterRequest } from "../../interfaces/register/index";

import { IContactRequest } from '../../interfaces/contact/index'

export const mockedUser: IRegisterRequest = {
  name: 'Kenzinho',
  email: 'kenzinho@gmail.com',
  password: "!Ab123456",
  cellphone: '21 99899 9999'
}

export const mockedContact: IContactRequest = {
  name: 'Kenzinho',
  email: 'kenzinho1@gmail.com',
  cellphone: '21 99899 9999'
}

export const mockedUserLogin: ISessionRequest = {
  email: 'kenzinho@gmail.com',
  password: '!Ab123456',
};

