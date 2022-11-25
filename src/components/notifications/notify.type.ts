export enum NotifyType {
  WARNING = 'warning',
  INFO = 'info',
  LOG = 'log',
}

export type NotifyPayload = {
  id?: number;
  type?: NotifyType;
  message?: string;
};

export enum NotifyStateAction {
  ADD = 'add',
  REMOVE = 'remove',
  REMOVE_ALL = 'remove_all',
}

export type NotifyDispatchStateAction =
  | { type: NotifyStateAction.ADD; payload: NotifyPayload }
  | { type: NotifyStateAction.REMOVE; payload: NotifyPayload }
  | { type: NotifyStateAction.REMOVE_ALL; payload: NotifyPayload };

export type NotifyContextProps = {
  warn: (message: string) => void;
  info: (message: string) => void;
  log: (message: string) => void;
  remove: (id?: number) => void;
  items: NotifyPayload[];
};
