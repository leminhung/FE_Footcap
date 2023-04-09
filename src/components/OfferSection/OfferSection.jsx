import React from "react";

const OfferSection = () => {
  return (
    <section class='offer_section clearfix'>
      <div class='container-fluid p-0'>
        <div class='row no-gutters justify-content-lg-between'>
          <div class='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
            <div class='ce_offer_fullimage offer_fullimage text-white text-center'>
              <img
                src='/assets/images/offer/classic_ecommerce/imgg_01.jpg'
                alt='image_not_found'
              />
              <div class='item_content'>
                <h3 class='item_title text-white mb_15'>Read The Blog</h3>
                <a class='text_btn text-uppercase' href='#!'>
                  <span>View all posts</span>
                </a>
              </div>
            </div>
          </div>

          <div class='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
            <div class='ce_offer_fullimage offer_fullimage text-white text-center'>
              <img
                src='/assets/images/offer/classic_ecommerce/imgg_02.jpg'
                alt='image_not_found'
              />
              <div class='item_content'>
                <h3 class='item_title text-white mb_15'>
                  Follow Our Store On Instagram
                </h3>
                <a class='text_btn text-uppercase' href='#!'>
                  <span>@JTHEMES</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
