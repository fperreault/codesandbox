/**
 * Modal Content type
 */
export type ModalContentType = JSX.Element | JSX.Element[] | null;

/**
 * Modal Context props
 */
export type ModalContextProps = {
  open: (content: ModalContentType) => void;
  close: () => void;
  content: ModalContentType;
};
