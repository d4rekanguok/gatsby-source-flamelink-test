`gatsby-source-flamelink` is not listed as a dependency. Instead, symlink it with your local `gatsby-source-flamelink` for development:

```
# cd to local gatsby-source-flamelink
yarn link

# cd to local test site
yarn link gatsby-source-flamelink

# start development with debug enabled
yarn develop
```