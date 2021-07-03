/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  testEnvironment: "jsdom",
  "testMatch": ["**/__tests__/**/*.[jt]s?(x)"],
    "moduleFileExtensions": [
      "js",
      "json",
      // 告诉 Jest 处理 `*.vue` 文件
      "vue"
    ],
    "transform": {
      // 用 `vue-jest` 处理 `*.vue` 文件
      ".*\\.(vue)$": "vue-jest",
      // 用 `babel-jest` 处理 js
      ".*\\.(js)$": "babel-jest" 
    }
};
