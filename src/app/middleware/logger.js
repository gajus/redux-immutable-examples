export default store => next => action => {
    console.group(action.name);
    console.info('dispatching', action);

    let result = next(action);

    console.log('next state', store.getState().toJS());
    console.groupEnd(action.name);

    return result;
};
