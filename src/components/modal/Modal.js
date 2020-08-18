import React, { Component } from 'react';
import styles from './modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closingByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closingByEsc);
  }

  closingByEsc = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return (
      <>
        <div className={styles.Overlay} onClick={this.props.onClose}>
          <div className={styles.Modal}>
            <img src={this.props.imageLarge} alt="" />
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
