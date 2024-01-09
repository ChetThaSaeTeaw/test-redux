// middleware.js
export const myMiddleware = (store) => (next) => (action) => {

    const currentState = store.getState();
    const result = next(action);

    return result;
};