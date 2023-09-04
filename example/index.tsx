import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.'

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  // img: './coffee-mug.png'
}
const App = () => {

  return (
    <>
      <ProductCard
        product={product}

        initialValues={{
          count: 4,
          MaxCount: 10
        }}
      >

        {(args) => (
          <>
            <ProductImage />
            <ProductTitle title={'primer producto'} />
            <ProductButtons maxCount={args?.maxCount} />



          </>
        )}
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
