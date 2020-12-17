import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { AppState } from '../redux';

const modalRoot: any = document.getElementById('modal-root');

const Modal: React.FC = () => {
  const showLoading = useSelector(
    ({ posts, user }: AppState) => posts.isFetching || user.isFetching
  );

  const modalContent = (
    <div className="fixed top-0 z-50 w-full h-full overflow-hidden grid place-items-center bg-white opacity-75">
      <div className="animate-spin rounded-full border-t-2 border-pink-400 h-20 w-20"></div>
    </div>
  );

  if (showLoading) {
    return ReactDOM.createPortal(modalContent, modalRoot);
  } else {
    return null;
  }
};

export default Modal;
