import {BASE_URL} from './api.constants.js';

export const LOGIN_URL = BASE_URL + 'authenticate';
export const SETUP_URL = BASE_URL + 'setup';
export const LOGIN_USER = Symbol('LOGIN_USER');
export const LOGOUT_USER = Symbol('LOGOUT_USER');
