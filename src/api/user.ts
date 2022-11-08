import http from './httpUtil';
export interface LoginData {
  operatorCode: string;
  password: string;
}

export interface LoginRes {
  token: string;
  data: any;
}

export function login(params: LoginData) {
  return http.request(
    {
      url: '/100016',
      method: 'POST',
      params,
    },
    {
      isParseToJson: true,
      isTransformRequestResult: false,
    }
  );
}

export function getUserInfo(operatorId) {
  return http.request(
    {
      url: '/100017',
      method: 'POST',
      params: { operatorId },
    },
    {
      isParseToJson: true,
      isTransformRequestResult: false,
    }
  );
}
export function resetUserPassword(params) {
  return http.request(
    {
      url: '/100006',
      method: 'POST',
      params,
    },
    {
      isParseToJson: true,
      isTransformRequestResult: false,
    }
  );
}
