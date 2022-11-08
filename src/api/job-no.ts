// 100004
import http from './httpUtil';

/**
 * 分页查询
 * @param params
 * @returns
 */
export function getJobNoPage(params) {
  return http.request(
    {
      url: '/100013',
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
 * 新增工号
 * @param params
 * @returns
 */
export function insertJobNo(params) {
  return http.request(
    {
      url: '/100005',
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
 * 编辑工号
 * @param params
 * @returns
 */
export function updateJobNo(params) {
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
/**
 * 删除工号
 * @param params
 * @returns
 */
export function deleteJobNo(params) {
  return http.request(
    {
      url: '/100007',
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
 * 获取对应层级的列表数据
 * @param params
 * @returns
 */
export function getTargetIdList(params) {
  return http.request(
    {
      url: '/fee/targetId/list',
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
 * 获取科室列表数据
 * @param params
 * @returns
 */
export function getDeptList(params) {
  return http.request(
    {
      url: '/fee/dept/list',
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
 * 获取对病区列表数据
 * @param params
 * @returns
 */
export function getAreaList(params) {
  return http.request(
    {
      url: '/fee/area/list',
      method: 'POST',
      params,
    },
    {
      isParseToJson: true,
      isTransformRequestResult: false,
    }
  );
}
