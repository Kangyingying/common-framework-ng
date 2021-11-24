/**
 * url配置
 *@author kyy
 *@date 2021/11/24 14:33
 */
import {environment} from '../environments/environment';

export class UrlConfig {
  public static domain  = `https://${environment.env}.xxxx.com`; // 或 environment.domain
  public static baseUrl = `${UrlConfig.domain}/api`;

  public static getA    = `${UrlConfig.baseUrl}/get/{id}`;
  public static getB    = `${UrlConfig.baseUrl}/get`;
  public static post    = `${UrlConfig.baseUrl}/post`;
}
