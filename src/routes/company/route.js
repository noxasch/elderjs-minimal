module.exports = {
  all: ({ data }) => {
    return data.companies.map((company) => ({ slug: company.FID }));
  },
  permalink: ({ request }) => {
    return `/${request.slug}/`;
  },
  data: ({ request, data }) => {
    const company = data.companies.find((company) => company.FID === request.slug);
    return { company }
  },
};
