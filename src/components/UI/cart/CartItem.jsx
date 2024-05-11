import React from "react";
import { ListGroupItem } from "reactstrap";
import "../../../styles/cart-item.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
const CartItem = ({ item }) => {
  const { id, title, price, img, quantity, totalPrice } = item;
  const dispatch = useDispatch();
  const incrementItem = () => {
    dispatch(cartActions.addItem({ id, title, price, img }));
  };
  const decrementItem = () => {
    dispatch(cartActions.removeItem(id));
  };
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <ListGroupItem className="border-0">
      <div className="cart_item_info d-flex gap-3 mb-2">
        <img src={img} alt="product-img" />
        <div className="cart_product_info d-flex justify-content-between w-100 gap-4">
          <div>
            <h6 className="cart_product_title">{title}</h6>
            <p className="cart_product_price d-flex align-items-center gap-5">
              {quantity}x <span>${totalPrice}</span>
            </p>
            <div className="increase_decrease_btn d-flex align-items-center gap-3">
              <span className="increase_btn" onClick={incrementItem}>
                <i class="ri-add-line"></i>
              </span>
              <span className="quantity">{quantity}</span>
              <span className="decrease_btn" onClick={decrementItem}>
                <i class="ri-subtract-line"></i>
              </span>
            </div>
          </div>
          <span className="delete_item_btn" onClick={deleteItem}>
            <i class="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
