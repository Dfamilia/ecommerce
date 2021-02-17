/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from "react";
import SHOP_DATA from "../../../staticDB/shopCollectionData";
import CollectionPreview from "../../components/collection-preview";

import "./styles.scss";

export default class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    console.log("data", collections);
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionsProps }) => (
          <CollectionPreview key={id} {...otherCollectionsProps} />
        ))}
      </div>
    );
  }
}
