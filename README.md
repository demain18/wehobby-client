# WeHobby

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start - 이걸로 build된 프로젝트 실행

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

# Running/Edit

## Monitoring
https://grafana.wehobby.kr

## Google Console
없음

## Google Adsense(happysugar180@gmail.com)
<script data-ad-client="ca-pub-7099403550820594" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
: Code - 아직 업데이트 안됨

## Gabia Message
https://my.gabia.com

## Dinamic Routing
dist폴더에 .htaccess파일 추가하고 아래 코드 삽입
<!-- <ifModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule (.*) index.html [QSA,L]
</ifModule> -->
<!-- Header add Access-Control-Allow-Origin "*"
Header add Access-Control-Allow-Methods: "GET,POST,OPTIONS,DELETE,PUT" -->