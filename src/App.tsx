import './App.css';
function App() {
  console.log('rendering main layout');
  return (
    <>
      <h1>Basic React Template</h1>
      <p>
        Just{' '}
        <a target="_blank" href="https://react.dev/">
          React
        </a>{' '}
        with{' '}
        <a target="_blank" href="https://vitejs.dev/">
          Vite
        </a>
        ,{' '}
        <a target="_blank" href="https://www.typescriptlang.org/">
          Typescript
        </a>
        ,{' '}
        <a target="_blank" href="https://eslint.org/">
          ESLint
        </a>{' '}
        and{' '}
        <a target="_blank" href="https://prettier.io/">
          Prettier
        </a>
      </p>
    </>
  );
}

export { App };
