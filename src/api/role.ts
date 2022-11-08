import http from './httpUtil';

/**
 * 分页查询
 * @param params
 * @returns
 */
export function getRolePage(params) {
  return http.request(
    {
      url: '/100004',
      method: 'POST',
      params,
    },
    {
      isParseToJson: true,
      isTransformRequestResult: false,
    }
  );
}
/**
 * 获取角色树列表
 * @returns
 */
export function getRoleTree() {
  return http.request(
    {
      url: '/100008',
      method: 'POST',
    },
    {
      isParseToJson: true,
      isTransformRequestResult: false,
    }
  );
}
/**
 * 新增角色
 * @param params
 * @returns
 */
export function insertRole(params) {
  return http.request(
    {
      url: '/100001',
      method: 'POST',
      params,
    },
    {
      isParseToJson: true,
      isTransformRequestResult: false,
    }
  );
}
/**
 * 编辑角色
 * @param params
 * @returns
 */
export function updateRole(params) {
  return http.request(
    {
      url: '/100003',
      method: 'POST',
      params,
    },
    {
      isParseToJson: true,
      isTransformRequestResult: false,
    }
  );
}
/**
 * 删除角色
 * @param params
 * @returns
 */
export function deleteRole(params) {
  return http.request(
    {
      url: '/100002',
      method: 'POST',
      params,
    },
    {
      isParseToJson: true,
      isTransformRequestResult: false,
    }
  );
}
/**
 * 获取角色下拉框列表
 * @param params
 * @returns
 */
export function selectRole(params) {
  return http.request(
    {
      url: '/1000041',
      method: 'POST',
      params,
    },
    {
      isParseToJson: true,
      isTransformRequestResult: false,
    }
  );
}
//1000041
