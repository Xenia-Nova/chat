import { Login } from '../pages/login/login';
import { Chat } from '../pages/chat/chat';
import { Registration } from '../pages/registration/registration';
import { HOME, CHAT, REGISTRATION } from '../constants/routesTypes';

export const commonRouter = [
  { path: HOME, component: Login },
  { path: REGISTRATION, component: Registration }
]

export const authRouter = [
  { path: CHAT, component: Chat }
]
