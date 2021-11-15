// import humps from 'humps';
// snake_case to camelCase seem to be handled by Nuxt
export default function ({ $axios }) {
  $axios.onRequest(config => {
    const isFormData = config.headers['Content-Type'] === 'multipart/form-data'
    if (isFormData) return config;
    
    const newConfig = { ...config };
    if (config.params) newConfig.params = humps.decamelizeKeys(config.params);
    if (config.data) newConfig.data = humps.decamelizeKeys(config.data);

    return newConfig;
  });

  $axios.onResponse(response => {
    const isFormatJson = response.data && response.headers['content-type'].includes('application/json')
    if (isFormatJson) response.data = humps.camelizeKeys(response.data);

    return response;
  });
};
