This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Deploy

Deployment is setup via vercel and github actions so you can just push and will get an url for every commit.  
To deploy to the live site create a pull request to merge into master.

## Setup Wordpress

### Plugins

- **Lazy Blocks**

  https://wordpress.org/plugins/lazy-blocks/  
  used to create custom blocks that can then be rendered by this page

- **REST Gutenberg**

  https://de.wordpress.org/plugins/rest-gutenberg/  
  Add blocks data to pages in wordpress api

### Setup

- The blocks used by this page must be created with lazy-blocks  
 *TODO: mabe add a backup of the confuguration here*

- Set the "Site URl" in the wordpress page settings to the frontend url: https://abenteuerzentrum.berlin.  
  
  This will break gutenberg because it will look for the `rest_url` under the frontend domain.  
  To fix this create a file `fix-rest-url.php` in `wp-content/plugins/fix-rest-url` with following to content:

  ```php
  <?php

  /**
   * Plugin Name:       Fix Rest URL
   * Description:       A WordPress plugin that updates the REST URL to use the site URL instead of the home URL.
   */

  add_filter('rest_url', function($url) {
      $url = str_replace(home_url(), site_url().'/index.php', $url);
      return $url;
  });
  ```
  
  (This is basically a custom wordpress plugin)
