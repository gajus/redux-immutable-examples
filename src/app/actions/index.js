export let taskAdd = name => ({
    name: 'TASK_ADD',
    data: {
        name
    }
});

export let taskDone = id => ({
    name: 'TASK_DONE',
    data: {
        id: id
    }
});

export let taskUndone = id => ({
    name: 'TASK_UNDONE',
    data: {
        id: id
    }
});
