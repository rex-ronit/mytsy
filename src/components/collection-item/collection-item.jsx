import React from "react";
import "./collection-item.scss";
import Button from "../button/button";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="collection-item_image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="collection-item_footer">
        <span className="item-name">{name}</span>
        <span className="item-price">{`$${price}`}</span>
      </div>
      <Button inverted onClick={() => addItem(item)}>
        Add to cart
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
