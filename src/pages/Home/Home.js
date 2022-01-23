import React, { Component } from "react";
import Bannerdiv from "../../component/Bannersection/Bannerdiv";
import Smallbanner from "../../component/small_poster/poster-3/Smallbanner";
import "./Home.css";
import {
  CATEGORIES_product,
  Products,
  Smallbannerimg,
} from "../../Global/JS/json";
import LineBanner from "../../component/small_poster/LineBanner/LineBanner";
import { labels } from "../../Global/JS/Label";
import Productsparent from "../../component/small_poster/Products/products-parent/Productsparent";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      BannerTop: [
        {
          id: 1,
          Name: "men",
          img: "https://images.bewakoof.com/uploads/grid/app/Inside-Banner-Desktop-ByeBye-Sale-Non-Tribe-Men-1640342552.jpg",
          size: 12,
        },
      ],
    };
  }

  render() {
    let Men_product_filter = Products.filter((result) =>
      result.for.includes("men")
    );
    return (
      <>
        <section>
          <div
            className={`${
              this.state.BannerTop.size === 12 ? "container" : "container:fluid"
            }`}
            style={{ overflowX: "hidden" }}
          >
            <div className="row ">
              <Bannerdiv
                details={this.state.BannerTop}
                key={this.state.BannerTop.id}
              />
            </div>
          </div>
        </section>

        <section>
          <div className="container-fluid">
            <div className="row mt-4 gx-3">
              {Smallbannerimg.slice(0, 3).map((el) => (
                <Smallbanner
                  col="col-4"
                  key={el.id}
                  cat={el.Link}
                  image={el.img}
                />
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="container-fluid">
            <div className="row my-4">
              <LineBanner img="./Assest/banner1.png" col="col-12" />
              <LineBanner img="./Assest/banner2.png" col="col-12 mt-3" />
            </div>
          </div>
        </section>

        <section>
          <h4 className="label text-center">{labels.POPULAR_CATEGORIES}</h4>
        </section>

        <section>
          <div className="container">
            <div className="row d-flex justify-content-center mt-4">
              {CATEGORIES_product.map((result) => (
                <Productsparent
                  key={result.id}
                  img={result.img}
                  content={result.title}
                  css="col-2 category-box"
                  data="category-box"
                />
              ))}
            </div>
          </div>
        </section>

        <section>
          <h4 className="label text-center my-5 ">
            {labels.DISCOUNT_PE_DISCOUNT}
          </h4>
          <div className="container-fluid">
            <div className="row mt-4 gx-3">
              {Smallbannerimg.slice(3, 7).map((el) => (
                <Smallbanner
                  col="col-6"
                  key={el.id}
                  cat={el.Link}
                  image={el.img}
                />
              ))}
            </div>
          </div>
        </section>

        <section>
          <h4 className="label text-center my-3 pb-4">
            {labels.NEW_ARRIVALS_FOR_MEN}
          </h4>
          <div className="container-fluid">
            <div className="row ms-auto">
              {Men_product_filter.slice(0, 5).map((Products) =>
                Products.for === "men" ? (
                  <Productsparent
                    key={Products.id}
                    img={Products.img}
                    content={Products.title}
                    css="col-2 mx-4"
                    price={Products.price}
                    strike={Products.strike}
                    Link={Products.categories}
                    data="product-price"
                  />
                ) : (
                  ""
                )
              )}
            </div>
          </div>
        </section>

        <section>
          <div className="container-fluid">
            <div className="row mt-4 gx-3">
              {Smallbannerimg.slice(0, 3).map((el) => (
                <Smallbanner
                  col="col-4"
                  key={el.id}
                  cat={el.Link}
                  image={el.img}
                />
              ))}
            </div>
          </div>
        </section>

        <section>
          <h4 className="label text-center my-3 pb-4">
            {labels.NEW_ARRIVALS_FOR_MEN}
          </h4>
          <div className="container-fluid">
            <div className="row ms-auto">
              {Men_product_filter.slice(0, 5).map((Products) =>
                Products.for === "men" ? (
                  <Productsparent
                    key={Products.id}
                    img={Products.img}
                    content={Products.title}
                    css="col-2 mx-4"
                    price={Products.price}
                    strike={Products.strike}
                    Link={Products.categories}
                    data="product-price"
                  />
                ) : (
                  ""
                )
              )}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Home;
