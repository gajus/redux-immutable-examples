export let taskAdd = name => ({
    name: 'ADD_TASK',
    data: {
        name
    }
});

export let taskComplete = id => ({
    name: 'COMPLETE_TASK',
    data: {
        id: id
    }
});
