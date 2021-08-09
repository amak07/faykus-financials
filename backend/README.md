# Faykus Financials - Backend

### Powered by

<img src="https://camo.githubusercontent.com/b25f65a5c408dcaeef14b726f979f704a243779bfc87649bf8bb989128306513/68747470733a2f2f7374726170692e696f2f6173736574732f7374726170692d6c6f676f2d6461726b2e737667" width="200" />

[![Heroku](https://heroku-badge.herokuapp.com/?app=afternoon-hollows-79281)](https://dashboard.heroku.com/apps/afternoon-hollows-79281)

**Backend** is a headless-CMS solution powered by Strapi and hosted on Heroku.

## Features

- Manage page content (images, copy, and links)
- Publish blog posts directly to the site
- Maintain an email list for weekly newsletter delivery
- Provides a "contact us" notification system

## Tech

**Backend** uses a number of open source projects to work properly:

- [Strapi](https://strapi.io/) - design APIs fast, manage content easily.
- [Grapql](https://graphql.org/) - query language for your API (managed via Strapi)

**Backend** requires the following cloud-based services (for production):

- [Heroku](https://www.heroku.com/platform) - deploys **Backend** onto the cloud
- [Cloudinary](https://cloudinary.com/) - maintains all media images and videos uploaded through **Backend**

And of course, the **Backend** source code can be found on [Github](https://github.com/amak07/faykus-financials).

## Installation

**Backend** requires [Node.js](https://nodejs.org/) v12+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd faykus-financials/backend
yarn install
yarn develop
```

## Strapi Plugins

**Backend** is currently built on top of [Strapi](https://strapi.io/) and is extended with the following plugins.

| Plugin       | Setup Guide                                                                                                               |
| ------------ | ------------------------------------------------------------------------------------------------------------------------- |
| GraphQL      | https://strapi.io/documentation/developer-docs/latest/development/plugins/graphql.html                                    |
| Postgres SQL | https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#required-configurations |
| Cloudinary   | https://strapi.io/blog/adding-cloudinary-support-to-your-strapi-application                                               |

## Development

Open your favorite Terminal and run the following command to start the Strapi server.

```sh
yarn develop
```

For production release, the Strapi instance hosted on Heroku will build and deploy automatically when new source code is checked into the `main` branch. However, the Strapi instance hosted on Heroku can also be manually updated and deployed after making changes locally.

To manually deploy to production:

```sh
cd faykus-financials/backend
heroku login
git push heroku master
```

## Heroku

**Backend** is a Strapi instance that is hosted and deployed on Heroku.

By default, new changes to Strapi configuration made in development will be pushed to this production instance when new source code is checked into the `main` branch.

**IMPORTANT**: Changes made locally to the database (i.e. new Content Types or modifying existing Content Types) will not propagate to production automatically even when new source code is checked into the `main` branch. Any new changes to Content Types or Roles or Settings will need to be manually updated through the production Strapi [admin](https://afternoon-hollows-79281.herokuapp.com/admin) panel.

### Example

1. During local Strapi development, a new API (and therefore a new Content Type) is created.
2. API is tested locally with **Frontend** and is deemed ready for production.
3. Any changes to **Backend** `config` files such as `config/env/production/plugins.js` or `config/env/production/database.js` will need to be deployed manually (or automatically when these `config` changes are checked into `main` branch).
4. However, the actual API (or Content Type) configuration that was created during local Strapi development will need to be duplicated through the production Strapi admin panel that is hosted on Heroku. This is because the production database will never be synced with local development.
