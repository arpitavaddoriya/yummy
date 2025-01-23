import "./Worksection.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WorkSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 4, // Show 4 slides at a time
    slidesToScroll: 4, // Scroll 4 slides at a time
  };

  const products = [
    {
      image: "/264x264_img1.jpg",
      title: "Margherita",
      description:
        "Italian tomato sauce, mozzarella, fresh basil, parmesan cheese, olive oil",
      price: "9.99",
    },
    {
      image: "/264x264_img2.jpg",
      title: "Original Prosciutto",
      description:
        "Italian tomato sauce, buffalo mozzarella with prosciutto di parma, fresh basil and parmesan",
      price: "11.99",
    },
    {
      image: "/264x264_img3.jpg",
      title: "Pepperoni",
      description:
        "Italian tomato sauce, mozzarella, spicy pepperoni, fresh basil and parmesan",
      price: "17.99",
    },
    {
      image: "/264x264_img4.jpg",
      title: "Quattro Formaggi",
      description:
        "White base pizza, mozzarella, provolone, pecorino, gorgonzola, cherry tomato, basil",
      price: "14.99",
    },
  ];

  // Replicating the product list 3 times for the effect you need (3 slides)
  const repeatedProducts = [...products, ...products, ...products]; // Repeat products 3 times

  return (
    <>
      {/* How it works section */}
      <div className="py-20 bg-yellow-400 flex flex-col items-center justify-center">
        <div>
          <h2 className="text-center">How It Works</h2>
          <p className="w-1/3 text-center mx-auto">
            Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at,
            neque. Vivamus eget nibh. Etiam cursus leo vel metus. Nulla
            facilisi.
          </p>
        </div>
        <div className="flex relative">
          <div className="mad-col">
            <article className="mad-icon-box">
              <i className="mad-icon-box-icon">
                <img className="svg" src="/cartIcon.svg" alt="" />
              </i>
              <div className="mad-icon-box-content">
                <h5 className="mad-icon-box-title">1. Select Your Food</h5>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              </div>
            </article>
          </div>
          <div className="mad-col">
            <article className="mad-icon-box">
              <i className="mad-icon-box-icon">
                <img className="svg" src="/walletIcon.svg" alt="" />
              </i>
              <div className="mad-icon-box-content">
                <h5 className="mad-icon-box-title">2. Pay With Card or Cash</h5>
                <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo.</p>
              </div>
            </article>
          </div>
          <div className="mad-col">
            <article className="mad-icon-box">
              <i className="mad-icon-box-icon">
                <img className="svg" src="/delievryIcon.svg" alt="" />
              </i>
              <div className="mad-icon-box-content">
                <h5 className="mad-icon-box-title">3. Pickup or Delivery</h5>
                <p>
                  Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend,
                  elit.
                </p>
              </div>
            </article>
          </div>
          <div className="absolute left-1/6 top-1/2">
            <img className="svg" src="/next_step.svg" alt="" />
          </div>
        </div>
        <div className="align-center">
          <a href="#" className="btn btn-style-3 btn-big">
            Order Now
          </a>
        </div>
      </div>

      {/* Product Slider Section */}
      <div className="mad-section">
        <h2 className="text-center">Discover Our Menu</h2>

        <div className="mad-tabs">
          <div
            role="tablist"
            aria-label="Tabs v1"
            className="mad-tabs-nav justify-content-center"
          >
            <span className="mad-active">
              <a
                id="tab-1-link"
                href="#tab-1"
                role="tab"
                aria-selected="false"
                aria-controls="tab-1"
                className="mad-tab-link"
              >
                Pizza
              </a>
            </span>
            <span>
              <a
                id="tab-2-link"
                href="#tab-2"
                role="tab"
                aria-selected="true"
                aria-controls="tab-2"
                className="mad-tab-link"
              >
                Pasta
              </a>
            </span>
            <span>
              <a
                id="tab-3-link"
                href="#tab-3"
                role="tab"
                aria-selected="false"
                aria-controls="tab-3"
                className="mad-tab-link"
              >
                Burgers
              </a>
            </span>
            <span>
              <a
                id="tab-4-link"
                href="#tab-4"
                role="tab"
                aria-selected="false"
                aria-controls="tab-4"
                className="mad-tab-link"
              >
                Sides
              </a>
            </span>
            <span>
              <a
                id="tab-5-link"
                href="#tab-5"
                role="tab"
                aria-selected="false"
                aria-controls="tab-5"
                className="mad-tab-link"
              >
                Desserts
              </a>
            </span>
            <span>
              <a
                id="tab-6-link"
                href="#tab-6"
                role="tab"
                aria-selected="false"
                aria-controls="tab-6"
                className="mad-tab-link"
              >
                Drinks
              </a>
            </span>
          </div>
        </div>
      </div>

      <div
        id="tab-1"
        tabIndex="0"
        role="tabpanel"
        aria-labelledby="tab-1-link"
        className="mad-tab"
      >
        <div className="slider-container">
          <Slider {...settings}>
            {repeatedProducts.map((product, index) => (
              <div
                className="mad-grid-item hover:border border-yellow-600 h-full"
                key={index}
                style={{ marginRight: "15px" }} // Add margin here\
              >
                {/* Product */}
                <div className="mad-product">
                  <figure className="mad-product-image style={{ marginBottom: '15px' }}">
                    <a href="#">
                      <img
                        className="p-5"
                        src={product.image}
                        alt={product.title}
                      />
                    </a>
                  </figure>

                  {/* product-desc */}
                  <div className="mad-product-description">
                    <h4
                      className="mad-product-tit
                    le"
                    >
                      <a href="#" className="mad-link">
                        {product.title}
                      </a>
                    </h4>
                    <p>{product.description}</p>
                  </div>

                  <div className="mad-product-calc">
                    <span className="mad-product-price">{product.price}</span>
                    <a href="#" className="btn btn-style-3 btn-small">
                      Select Options
                    </a>
                  </div>
                </div>
                {/* End of Product */}
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="align-center">
        <a href="#" className="btn btn-style-2 btn-big">
          View All Menu
        </a>
      </div>
    </>
  );
};

export default WorkSection;
