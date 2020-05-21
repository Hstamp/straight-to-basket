import React from 'react';
import { Layout } from '../elements';
import TotalBasketContext from '../TotalBasketContext';

const ReviewOrder = () => {
  const { state } = React.useContext(TotalBasketContext);
  console.log(state);
  return (
    <div>
      <Layout dataTestId="reviewOrderLayout">
        {
          state.basket.map((orderItem) => (
            <p>
              {' '}
              {orderItem.menuItemName}
              {' '}
            </p>
          ))
        }
      </Layout>
    </div>
  );
};

export default ReviewOrder;
