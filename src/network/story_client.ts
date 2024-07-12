import { hnAPIClient, HNAPIClient } from './base_client';

declare module './base_client' {
  interface HNAPIClient {
    getListStories(
      type: 'topstories' | 'newstories' | 'beststories',
    ): Promise<number[]>;
  }
}

HNAPIClient.prototype.getListStories = async (
  type: 'topstories' | 'newstories' | 'beststories',
) => {
  const _response = await hnAPIClient.axios.get(
    `/v0/${type}.json?print=pretty`,
  );

  if (_response.data !== undefined && Array.isArray(_response.data)) {
    return _response.data;
  }
  return [];
};
