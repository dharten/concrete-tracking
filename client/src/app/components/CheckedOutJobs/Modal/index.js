import React, {Component} from "react";

export default class Modal extends Component {
  render() {
    if (this.props.isOpen === false)
      return null

    let modalStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '9999',
      background: '#fff',
      width: "90%",
      border: "#4caf50 solid 15px",
      padding: "15px"
    }

    let backdropStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0px',
      left: '0px',
      zIndex: '9998',
      background: 'rgba(129, 129, 129, 0.5)'
    }

    return (
      <div className={this.props.containerClassName}>
        <div className={this.props.className} style={modalStyle}>
          {this.props.children}
        </div>
        {!this.props.noBackdrop &&
          <div className={this.props.backdropClassName} style={backdropStyle}/>}
      </div>
    )
  }

  close(e) {
    e.preventDefault()
    if (this.props.onClose) {
      this.props.onClose()
    }
  }
}
