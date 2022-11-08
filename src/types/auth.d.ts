declare namespace Auth {
  interface UserInfo {
    areaId: string;
    areaName: string;
    blockStatus: string;
    branchId: string;
    branchName: string;
    contactAddr: string;
    contactPerson: string;
    contactPhone: string;
    deptId: string;
    deptName: string;
    funcList: string;
    operatorCode: string;
    operatorId: string | number;
    operatorLevel: string;
    operatorName: string;
    phoneNumber: string;
    statusOperatorId: string;
  }
}

declare namespace Http {
  interface IApiRes<T> {
    retData: T;
    retCode: string | number;
    retMessage: string;
    totalNum?: number;
  }
}
