import Http from "@/utils/request.js";

export function getPikData(params) {
  return Http({
    isOldApi: true,
    method: params.method || "get",
    url: params.url,
    params: params.params,
    data: params.data || {}
  });
}

export function getApiData(params) {
  return Http({
    method: params.method,
    url: params.url,
    params: params.params
  });
}
