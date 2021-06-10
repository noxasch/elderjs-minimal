module.exports = {
  all: ({ }) => [{ slug: '/all' }],
  permalink: ({ request }) => request.slug,
  data: ({ }) => {},
};
