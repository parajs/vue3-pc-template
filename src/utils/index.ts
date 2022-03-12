import dayjs from 'dayjs';
import md5 from 'md5';

/**
 * 格式化时间
 */
export function formatTime(
  date?: string | number | Date | dayjs.Dayjs | null | undefined,
  template?: string | undefined
) {
  return dayjs(date).format(template);
}

/**
 *
 * 格式化时间
 */
export function timeAgo(
  date?: string | number | Date | dayjs.Dayjs | null | undefined,
  template?: string
) {
  const d = dayjs(date).valueOf();
  const now = Date.now();
  const diff = (now - d) / 1000;
  if (diff < 3600) {
    return Math.ceil(diff / 60) + '分钟前';
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前';
  } else {
    return formatTime(date, template);
  }
}

/**
 * md5加密
 */
export function md5Encryption(
  message: string | Buffer | number[] | Uint8Array
) {
  const KEY = md5('LULU Derivation');
  return md5(KEY + md5(message));
}

/**
 * 类型检查
 */

export function typeCheck(param: any) {
  return Object.prototype.toString.call(param);
}

/**
 * 批量修改stage
 */
export function mutateState(state: AnyObject, payload: AnyObject) {
  if (
    typeCheck(state) === '[object Object]' &&
    typeCheck(payload) === '[object Object]'
  ) {
    for (const key in payload) {
      state[key] = payload[key];
    }
  } else {
    console.error('expected plain Object');
  }
}
