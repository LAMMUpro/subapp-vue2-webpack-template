/**
 * 获取lottie文件链接
 * @params name {string}
 */
export function getLottieJsonLink(
  /**  lottie文件名称，不用带.json后缀 */
  name
) {
  return `/micromain/lottie/${name}.json`;
}
