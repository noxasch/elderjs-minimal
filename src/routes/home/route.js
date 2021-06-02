module.exports = {
  all: ({ data }) => [{ slug: '/' }],
  permalink: ({ request }) => request.slug,
  data: ({ data }) => {},
};
