export interface PostsA { //Todo
  id: number;
  title: string;
  body: string;
}

export interface PostsState {
    tCount: number;
    todos: PostsA[];
    completed:number;
}