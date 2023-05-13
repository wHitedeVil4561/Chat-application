import { environment } from "src/environments/environment";

export const API_ENPOINTS = {
  login: `${environment.BASE_URL}/v1/auth/login`,
  signup: `${environment.BASE_URL}/v1/auth/sign-up`,
};
