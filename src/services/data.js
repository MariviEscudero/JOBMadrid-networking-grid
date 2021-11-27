const callToApi = () => {
  return fetch(
    `https://challenges-asset-files.s3.us-east-2.amazonaws.com/jobMadrid/companies.json`
  )
    .then((response) => response.json())
    .then((json) => {
      const companies = json.map((data) => {
        return {
          founded: data.founded === null ? 'Unknown' : data.founded,
          id: data.id,
          industry: data.industry === null ? data.id : data.industry,
          name: data.name === null ? 'Unknown' : data.name,
          size: data.size === null ? 'Unknown' : data.size,
          website: data.website === null ? 'Unknown' : data.website,
        };
      });
      return companies;
    })
};
export default callToApi;