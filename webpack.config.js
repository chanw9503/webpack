const path = require('path'); //node.js에서 파일의 경로를 쉽게 핸들링 할 수 있게 도와주는 부품

module.exports = {
  mode: 'development',
  entry: './source/index.js', // 입구에 해당하는 파일 입력
  output: {
    path: path.resolve(__dirname, 'public'), //__dirname : 현재 webpack.config.js 파일이 위치하고 있는 경로를 알려주는 변수  // public 이라는 하위 경로에 최종적인 결과물을 갖다 놓으라는 뜻
    filename: 'index_bundle.js', //생성될 파일의 이름
  },
  module: {
    rules: [
      //module을 처리하는 rule
      {
        test: /\.css$/i, //웹펙을 통해서 가공하는 여러가지 데이터들에서 확장자가 css 임을 파일을 처리하는 방법
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
