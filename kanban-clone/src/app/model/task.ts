export interface Task {
  name: string;
  description: string;
  priority: priority,
  tags: Tag[],
  color: string,
}

export interface Tag {
  name: string
}

enum priority {
  urgent,
  important,
  normal,
  low
}
