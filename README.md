# Nodelab
Development foundation of npm package

Nodelab は npm パッケージを迅速に開発するためのベースプロジェクトです。  
ECMAScript 6 で サーバサイド、クライアントサイド両方で利用できる形式のライブラリを開発するために、以下のタスクを用意しています。  

+ ビルド: [Webpack](http://webpack.github.io/) + [babel-loader](https://github.com/babel/babel-loader)
+ ユニットテスト: [Mocha](https://mochajs.org/) + [power-assert](https://github.com/power-assert-js/power-assert)
+ 構文チェック: [ESLint](http://eslint.org/)

用意しているタスクは `package.json` の `scripts`、もしくは `npm run` コマンドで確認することができます。  

Node.js の v4.x、v5.x、v6.x の最新版での動作を確認しています。  

## パッケージの公開にあたって
実際に npm に登録するなど、公開に際しては以下の点に注意してください。  

+ `package.json` の編集
  + `name` の変更
  + `version` の指定
  + `description` の変更
  + `keywords` の指定
  + `author` の変更
  + `repository` の変更
  + 適切な `license` の指定
+ `webpack.config.js` の編集
  + `output.library` での公開する名前の変更
  + 公開方法に合わせた `output.libraryTarget` の指定
+ ライセンスや著作権表示等の記述
  + 必要に応じて、ライセンスの明示やソースコードへの追加を行ってください

## Development on Local
### Setup

    git clone https://github.com/AKIRA-MIYAKE/Nodelab.git
    cp -r Nodelab [package-name]
    cd [package-name]
    npm install

### Build

    npm run build

### Unit Test

    npm run test

### Unit Test + Lint

    npm run check

### Unit Test + Lint + Watch

    npm run dev

## Development on Docker(Beta)
Docker 上でライブラリの開発を行うことができます。  
一部機能は Docker for Mac Beta のみで利用可能です。  

### Setup

    git clone https://github.com/AKIRA-MIYAKE/Nodelab.git
    cp -r Nodelab [package-name]
    cd [package-name]
    docker-compose build

### Build

    docker-compose run --rm lab npm run build

### Unit Test

    docker-compose run --rm lab npm run test

### Unit Test + Lint

    docker-compose run --rm lab npm run check

### Unit Test + Lint + Watch

    docker-compose up
