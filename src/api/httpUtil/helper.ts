import { Message } from '@arco-design/web-vue';
import { AxiosResponse } from 'axios';

/**
 * 下载文件
 * @param res
 * @returns
 */
export function downloadFile(res: AxiosResponse) {
  return new Promise((resolve, reject) => {
    console.log('res', res);
    const name = res.headers['content-disposition'];
    const fileName = name.substring(name.indexOf('=') + 1, name.length);
    try {
      const blob = new Blob([res.data]);
      if ('download' in document.createElement('a')) {
        const isEXCLE =
          res.headers['content-type'] === 'application/msexcel;charset=UTF-8';
        if (!isEXCLE) {
          const reader = new FileReader();
          reader.onload = (e: any) => {
            Message.error(JSON.parse(e.target.result).retMessage);
          };
          reader.readAsText(res.data);
        } else {
          const str = res.headers['content-disposition'];
          const name = str.split('=')[1].split('.')[0];
          const fileType = str.split('=')[1].split('.')[1];
          const elink: any = document.createElement('a');
          const blob = new Blob([res.data]);
          elink.style.display = 'none';
          elink.href = URL.createObjectURL(blob);
          elink.target = '_blank';
          elink.download = decodeURI(name) + '.' + fileType;
          elink.tableBorder = 1;
          document.body.appendChild(elink);
          elink.click();
          // 释放URL 对象
          URL.revokeObjectURL(elink.href);
          document.body.removeChild(elink);
        }
      } else {
        // IE10+下载
        (navigator as any).msSaveBlob(blob, fileName);
      }
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
}

const toString = Object.prototype.toString;
