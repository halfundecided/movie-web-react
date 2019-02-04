## Local hosting
- `git clone git@github.com:halfundecided/movie-web-react.git && cd movie-web-react`
- `yarn start`
- However, this webpage is deployed at http://www.mijeong.me/movie-web-react/

## Deployment
1. `yarn build`  
2. add `"homepage": "http://mijeong.me/myapp" to package.json
3. `yarn build`
4. `yarn add --dev gh-pages
5. `yarn run deploy`