export interface Task {
  name: string;
  description: string;
  priority: priority,
  tags: string[],
  color: string,
}

enum priority {
  urgent,
  important,
  normal,
  low
}
