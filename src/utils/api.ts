const handleResult = async (response: Response): Promise<any> => {
  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    return Promise.reject({ status: response.status, ...data });
  }
};

export default async (
  endpoint: string,
  { method = "get", body = null, headers = {}, otherConfigs = {} } = {}
): Promise<any> => {
  return window
    .fetch(endpoint, {
      method,
      body,
      headers: {
        ...headers,
      },
      ...otherConfigs,
    })
    .then((response) => handleResult(response));
};
