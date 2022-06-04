import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import s from "./Modal.module.css";
import { useEffect } from "react";

const modalRoot = document.querySelector("#modal-root");

function Modal({ onModalClose, children }) {
  useEffect(() => {
    window.addEventListener("keydown", onEscKeyDown);
    return () => {
      window.removeEventListener("keydown", onEscKeyDown);
    };
  });

  const onEscKeyDown = (evt) => {
    if (evt.code === "Escape") {
      onModalClose();
    }
  };

  const onBackdropClick = (evt) => {
    if (evt.currentTarget === evt.target) {
      onModalClose();
    }
  };
  return createPortal(
    <div className={s.Overlay} onClick={onBackdropClick}>
      <div className={s.Modal}>
        <div>{children}</div>
      </div>
    </div>,
    modalRoot
  );
}
Modal.propTypes = {
  onModalClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;

// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener("keydown", this.onEscKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("keydown", this.onEscKeyDown);
//   }

//   onBackdropClick = (evt) => {
//     if (evt.currentTarget === evt.target) {
//       this.props.onModalClose();
//     }
//   };

//   onEscKeyDown = (evt) => {
//     if (evt.code === "Escape") {
//       this.props.onModalClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <div className={s.Overlay} onClick={this.onBackdropClick}>
//         <div className={s.Modal}>
//           <div>{this.props.children}</div>
//         </div>
//       </div>,
//       modalRoot
//     );
//   }
// }
