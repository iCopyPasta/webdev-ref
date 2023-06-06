class Todo {
  id: string;
  text: string;

  constructor(todoText: string){
    this.text = todoText;
    // good enough for demo purposes
    this.id = new Date().toISOString();
  };
};

export default Todo;
