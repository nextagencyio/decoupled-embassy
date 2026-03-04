import { gql } from '@apollo/client'

// Homepage query with stats
export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription {
          processed
        }
        statsItems {
          ... on ParagraphStatItem {
            id
            number
            label
          }
        }
        featuredServicesTitle
        ctaTitle
        ctaDescription {
          processed
        }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

// Embassy Services
export const GET_SERVICES = gql`
  query GetServices($first: Int = 20) {
    nodeServices(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeService {
          body {
            processed
            summary
          }
          serviceCategory {
            ... on TermInterface {
              id
              name
            }
          }
          processingTime
          fee
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_SERVICE_BY_PATH = gql`
  query GetServiceByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeService {
            id
            title
            path
            body {
              processed
            }
            serviceCategory {
              ... on TermInterface {
                id
                name
              }
            }
            processingTime
            fee
            requiredDocuments {
              processed
            }
            onlineUrl
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Officials
export const GET_OFFICIALS = gql`
  query GetOfficials($first: Int = 50) {
    nodeOfficials(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeOfficial {
          body {
            processed
          }
          position
          email
          phone
          photo {
            url
            alt
            width
            height
            variations(styles: [MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_OFFICIAL_BY_PATH = gql`
  query GetOfficialByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeOfficial {
            id
            title
            path
            body {
              processed
            }
            position
            email
            phone
            photo {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Travel Advisories
export const GET_TRAVEL_ADVISORIES = gql`
  query GetTravelAdvisories($first: Int = 20) {
    nodeTravelAdvisories(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeTravelAdvisory {
          body {
            processed
            summary
          }
          advisoryLevel {
            ... on TermInterface {
              id
              name
            }
          }
          effectiveDate {
            timestamp
          }
          country
          lastUpdated {
            timestamp
          }
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_TRAVEL_ADVISORY_BY_PATH = gql`
  query GetTravelAdvisoryByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeTravelAdvisory {
            id
            title
            path
            body {
              processed
            }
            advisoryLevel {
              ... on TermInterface {
                id
                name
              }
            }
            effectiveDate {
              timestamp
            }
            country
            lastUpdated {
              timestamp
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// News
export const GET_NEWS = gql`
  query GetNews($first: Int = 20) {
    nodeNewsItems(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        ... on NodeNews {
          body {
            processed
            summary
          }
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
          category {
            ... on TermInterface {
              id
              name
            }
          }
          featured
        }
      }
    }
  }
`

export const GET_NEWS_BY_PATH = gql`
  query GetNewsByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeNews {
            id
            title
            path
            created {
              timestamp
            }
            body {
              processed
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
            category {
              ... on TermInterface {
                id
                name
              }
            }
            featured
          }
        }
      }
    }
  }
`

// Generic route query for pages and other content
export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            id
            title
            body {
              processed
            }
          }
          ... on NodeService {
            id
            title
            path
            body {
              processed
            }
            serviceCategory {
              ... on TermInterface {
                id
                name
              }
            }
            processingTime
            fee
            requiredDocuments {
              processed
            }
            onlineUrl
          }
          ... on NodeOfficial {
            id
            title
            path
            body {
              processed
            }
            position
            email
            phone
          }
          ... on NodeTravelAdvisory {
            id
            title
            path
            body {
              processed
            }
            advisoryLevel {
              ... on TermInterface {
                id
                name
              }
            }
            effectiveDate {
              timestamp
            }
            country
            lastUpdated {
              timestamp
            }
          }
          ... on NodeNews {
            id
            title
            path
            created {
              timestamp
            }
            body {
              processed
            }
            category {
              ... on TermInterface {
                id
                name
              }
            }
            featured
          }
          ... on NodeHomepage {
            id
            title
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            featuredServicesTitle
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`

// Featured services for homepage (limit to 3)
export const GET_FEATURED_SERVICES = gql`
  query GetFeaturedServices {
    nodeServices(first: 3, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeService {
          serviceCategory {
            ... on TermInterface {
              id
              name
            }
          }
          processingTime
          fee
          image {
            url
            alt
            variations(styles: [MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

// Featured news for homepage
export const GET_FEATURED_NEWS = gql`
  query GetFeaturedNews {
    nodeNewsItems(first: 3, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        ... on NodeNews {
          body {
            summary
          }
          image {
            url
            alt
            variations(styles: [MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
          category {
            ... on TermInterface {
              id
              name
            }
          }
          featured
        }
      }
    }
  }
`

// Travel advisories for homepage
export const GET_RECENT_ADVISORIES = gql`
  query GetRecentAdvisories {
    nodeTravelAdvisories(first: 3, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeTravelAdvisory {
          advisoryLevel {
            ... on TermInterface {
              id
              name
            }
          }
          country
          lastUpdated {
            timestamp
          }
        }
      }
    }
  }
`
