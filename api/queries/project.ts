export default `query ($uuid: String!) {
  projects(where: { is_published: true, uuid: $uuid }, sort: "updated_at:desc") {
    title
    description
    address
    postcode
    city
    floor_area
    client
    hoai_phases
    end_year
    content {
      __typename
      ... on ComponentProjectcontentImages {
        span
        images {
          name
          ext
          mime
          url
        }
    	}
      ... on ComponentProjectcontentText {
        text
    	}
      ... on ComponentProjectcontentTextAndImage {
        text
        text_first
        image {
          name
          ext
          mime
          url
        }
    	}
    }
    cover {
      name
      ext
      mime
      url
    }
  }
}`;
