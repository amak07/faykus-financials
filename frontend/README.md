# Faykus Financials - Frontend

### Powered by

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/440px-Nextjs-logo.svg.png" width="200" />

![Vercel](https://vercelbadge.vercel.app/api/amak07/faykus-financials)

## Features

- Static generation for fast-loading webpages
- Flexible, mobile-first design
- Integrates with the Strapi blog system
- Can register users for weekly newsletters using Strapi email system

## Tech

**Frontend** uses a number of open source projects to work properly:

- [Next](https://nextjs.org/learn) - React framework for delivering pre-rendered webpages.
- [React](https://reactjs.org/docs/getting-started.html) - UI library for building webpages

**Frontend** requires the following cloud-based services (for production):

- [Vercel](https://vercel.com/amak07/faykus-financials) - deploys **Frontend** onto the cloud

And of course, the **Frontend** source code can be found on [Github](https://github.com/amak07/faykus-financials).

## Installation

**Frontend** requires [Node.js](https://nodejs.org/) v12+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd faykus-financials/frontend
yarn install
yarn dev
```

## Next.js Plugins

**Frontend** is a Next.js project but will leverage a number of important 3rd-party libraries for additional functionality.

| Plugin           | Setup Guide                             |
| ---------------- | --------------------------------------- |
| React Query      | https://react-query.tanstack.com/       |
| GraphQL Code Gen | https://www.graphql-code-generator.com/ |

## Development

Open your favorite Terminal and run the following command to start the dev server in folder `faykus-financials/frontend`.

```sh
yarn dev
```

For production release, the Next.js instance hosted on Vercel will build and deploy automatically when new source code is checked into the `main` branch.

To manually run and serve the production build locally:

```sh
cd faykus-financials/frontend
yarn serve:prod
```

## Vercel

**Frontend** is a Next.js instance that is hosted and deployed on Vercel.

By default, new changes made in development will be pushed to this production instance when these chagnes are checked into the `main` branch.
