
export default class MyTodo {
    _id: number;
    title = '';
    complete = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
