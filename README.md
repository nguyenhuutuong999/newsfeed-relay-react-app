# Newsfeed Application Example

The Relay application is designed to be used in conjunction with the Relay documentation to demonstrate the APIs, concepts, and principles of Relay and their use in building Relay applications.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine
2. Install the dependencies by running `npm install`
3. Start the app by running `npm run dev`

The application will now be running at [`localhost:3000`](http://localhost:3000). This application also has [GraphiQL](https://github.com/graphql/graphiql) setup so that you can run test queries against the schema. Navigate to [`localhost:3000/playground`](http://localhost:3000) to try it out.

## Project Structure

This project uses the following structure:

- `src/`: contains the source code for the app
- `src/components/`: contains the React components for the app
- `src/index.tsx`: the entry point for the app
- `webpack.config.js`: the configuration file for Webpack
- `tsconfig.json`: the configuration file for TypeScript
- `.prettierrc.json`: the configuration file for Prettier
- `.eslintrc.json`: the configuration file for ESLint

## Typescript, Prettier and Lint

This project uses Prettier and ESLint to enforce a consistent code style. Prettier is a code formatter that automatically formats your code according to a set of rules. ESLint is a linting tool that identifies and reports on patterns found in your code.

To run TypeScript, Prettier, and ESLint, run the following command:

```sh
  npm run ts
```

```sh
  npm run lint
```

```sh
  npm run prettier
```

These commands lint and format your code, and print any linting errors or warnings to the console.

## Additional Resources

- [Relay documentation](https://relay.dev)
- [React documentation](https://reactjs.org/docs/getting-started.html)
- [Webpack documentation](https://webpack.js.org/concepts/)
- [TypeScript documentation](https://www.typescriptlang.org/docs/home.html)
- [Prettier documentation](https://prettier.io/docs/en/index.html)
- [ESLint documentation](https://eslint.org/docs/user-guide/getting-started)


after
graphql: query, mutation, fragmen, 
connection vs pagination

research about the relay, relay complier library for FE, try to set up it into the new source code, find out how to get schame graphql from entrypoint and how to relay compiler find  create 

read a guidline: about a tech stack and coding convension, branch PR strategy, unit testing,...

read prototype code
trao đổi thảo luận vs a Long về các thư viện

unit testing
we need define which do FE should be tesing. just unitity, logic code in component,...

atom design

nên dung usePreloadQuery
khi một Object Implement một Object khác thì. Object kia sẽ có thể query Object này
relay sẽ lưu data từ query trong store là những node ID
refetchable fragment chỉ lấy dữ liệu cần thiết mà ko cần lấy lại toàn bộ truy vấn ban đầu đồng thời chỉ cập nhập dữ liệu của phần đang tương tác, còn những phần khác ko thay đổi.
connection pagination(just in fragment) and infinity scroll
optomistic update
connection
