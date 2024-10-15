import React, {useState} from 'react'
import Modal from 'react-modal'

import CartContext from '../../context/CartContext'
import Payments from '../Payments'

import './index.css'

const CartSummary = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        let total = 0
        cartList.forEach(eachCartItem => {
          total += eachCartItem.price * eachCartItem.quantity
        })

        return (
          <>
            <div className="cart-summary-container">
              <h1 className="order-total-value">
                <span className="order-total-label">Order Total:</span> Rs{' '}
                {total}/-
              </h1>
              <p className="total-items">{cartList.length} Items in cart</p>
              <button
                className="checkout-button d-sm-none"
                type="button"
                onClick={openModal}
              >
                Checkout
              </button>
              <button
                className="checkout-button d-lg-none"
                type="button"
                onClick={openModal}
              >
                Checkout
              </button>

              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="modal"
                overlayClassName="modal-overlay"
              >
                <button onClick={closeModal} className="close-modal-button">
                  &times;
                </button>
                <Payments close={closeModal} />
              </Modal>
            </div>
          </>
        )
      }}
    </CartContext.Consumer>
  )
}

export default CartSummary
