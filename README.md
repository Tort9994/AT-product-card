# DO-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Alfonso Tort

##Ejemplo

```
import {ProductCard, ProductImage,ProductTitle, ProductButtons } from 'AT-product-card'
```

```
  <ProductCard
                key={product.id}
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
```
