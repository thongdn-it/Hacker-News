import curlirize from 'axios-curlirize';
import Axios, { AxiosInstance } from 'axios';

declare global {
  type Dictionary<V> = { [key: string]: V | undefined };
}

class HNBaseAPIClient {
  private _axios: AxiosInstance;

  public get axios(): AxiosInstance {
    return this._axios;
  }

  constructor(
    baseURL: string,
    config?: { timeout?: number; headers?: Dictionary<string> },
  ) {
    this._axios = Axios.create({
      baseURL,
      headers: config?.headers,
      timeout: config?.timeout,
    });
    if (__DEV__) {
      curlirize(this._axios);
    }
  }
}

export class HNAPIClient extends HNBaseAPIClient {
  constructor() {
    super('https://hacker-news.firebaseio.com');
  }
}

export const hnAPIClient = new HNAPIClient();
