import React from 'react';
import {BuyNowOuterLayout,CartAnchor,BuyNowLayout,CartIcon} from './buynow.style';

const BuyNow = () => {
    return(
        <BuyNowOuterLayout>
            <CartAnchor aria-label="Buy Now" rel="noreferrer" target="_blank" href="https://www.reactrepo.com/template/1-zircon-react-gatsby-landing-page-templates/">
                <BuyNowLayout>
                    <CartIcon />
                </BuyNowLayout>
            </CartAnchor>
        </BuyNowOuterLayout>
    );
}

export default BuyNow;