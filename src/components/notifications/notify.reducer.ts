import {
  NotifyPayload,
  NotifyStateAction,
  NotifyDispatchStateAction,
} from '@components/notifications';

/**
 * Notify Reducer
 */
const reducer = (state: NotifyPayload[], action: NotifyDispatchStateAction) => {
  switch (action.type) {
    case NotifyStateAction.ADD:
      return [
        ...state,
        {
          id: +new Date(),
          type: action.payload.type,
          message: action.payload.message,
        },
      ];

    case NotifyStateAction.REMOVE:
      return state.filter((item) => item.id !== action.payload.id);

    case NotifyStateAction.REMOVE_ALL:
      return [];

    default:
      return state;
  }
};

export { reducer as notifyReducer };
