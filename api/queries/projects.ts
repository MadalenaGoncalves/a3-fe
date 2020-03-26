export default `query {
  projects(where: { is_published: true }) {
    uuid
    slug
    title
    cover {
      name
      ext
      mime
      url
    }
  }
}`;
