let taskAdd,
    taskDone,
    taskUndone;

taskAdd = (name) => ({
    name: 'TASK_ADD',
    data: {
        name
    }
});

taskDone = (id) => ({
    name: 'TASK_DONE',
    data: {
        id
    }
});

taskUndone = (id) => ({
    name: 'TASK_UNDONE',
    data: {
        id
    }
});

export {
    taskAdd,
    taskDone,
    taskUndone
};
