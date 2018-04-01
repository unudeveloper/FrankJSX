const babel = require('@babel/core')
const mdx = require('../index')
const fs = require('fs')
const path = require('path')

it('Should output parseable javascript (jsx)', () => {
  const code = mdx('Hello World')
  babel.parse(code, {
    plugins: ["@babel/plugin-syntax-jsx"]
  })
})

it('Should compile fine to snapshot', () => {
  const code = mdx('Hello World')
  expect(code).toMatchSnapshot()  
})

it('Should compile sample blogpost to snapshot', () => {
  const fixtureBlogPost = fs.readFileSync(path.join(__dirname,'./fixtures/blog-post.md'))
  const code = mdx(fixtureBlogPost)
  expect(code).toMatchSnapshot()  
})
