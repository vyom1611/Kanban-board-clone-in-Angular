export interface Task {
  name: string;
  description: string;
  priority: priority,
  done: boolean,
}

enum priority {
  Urgent,
  Important,
  Normal,
  Low
}
