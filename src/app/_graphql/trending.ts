import { META } from './meta'

export const TRENDING = `
  query Trendings {
    Trendings(limit: 9) {
      docs {
        id
        title
        relatedProducts {
          id
          slug
          title
          ${META}
        }
      }
    }
  }
`
