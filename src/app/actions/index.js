const taskAdd = (name) => {
  return {
    data: {
      name
    },
    type: 'TASK_ADD'
  };
};

const taskDone = (id) => {
  return {
    data: {
      id
    },
    type: 'TASK_DONE'
  };
};

const taskUndone = (id) => {
  return {
    data: {
      id
    },
    type: 'TASK_UNDONE'
  };
};

export {
  taskAdd,
  taskDone,
  taskUndone
};
