# filemetadata-microservice
[![Build Status](https://travis-ci.org/hexjelly/filemetadata-microservice.svg?branch=master)](https://travis-ci.org/hexjelly/filemetadata-microservice) [![Coverage Status](https://coveralls.io/repos/github/hexjelly/filemetadata-microservice/badge.svg?branch=master)](https://coveralls.io/github/hexjelly/filemetadata-microservice?branch=master) [![Greenkeeper badge](https://badges.greenkeeper.io/hexjelly/filemetadata-microservice.svg)](https://greenkeeper.io/) [![Known Vulnerabilities](https://snyk.io/test/github/hexjelly/filemetadata-microservice/badge.svg)](https://snyk.io/test/github/hexjelly/filemetadata-microservice)

freeCodeCamp challenge: File Metadata Microservice

## About
Uses [Express](https://www.npmjs.com/package/express) with [Multer](https://www.npmjs.com/package/multer) middleware to handle form uploads.

[Bulma](http://bulma.io/) CSS framework for a simple upload form.

[Ava](https://github.com/avajs/ava) with [Supertest](https://github.com/visionmedia/supertest) for testing. [XO](https://github.com/sindresorhus/xo) for linting.

[Demo link](https://hj-filemetadata.herokuapp.com/)

## Install and usage
```shell
git clone https://github.com/hexjelly/filemetadata-microservice.git
cd filemetadata-microservice
npm install
# optionally create a .env file with desired port number
# or alternatively specify an env variable named `PORT`
# defaults to 3560
echo PORT=3000 > .env
npm run start
```

## License
Apache-2.0
