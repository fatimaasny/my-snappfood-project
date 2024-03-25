import "./ItemAddbtn.css";
export default function ItemAddbtn({ title, discount, oldPrice, newPrice }) {
  return (
    <div className="item-addbtn-component">
      <div className="content-right">
        <div className="all-price">
          {title && <p className="title">{title}</p>}
          <div className="box-price">
            {discount && (
              <div className="discount">
                <p>{discount}</p>
              </div>
            )}

            {oldPrice && newPrice && (
              <div className="prices">
                <span id="old-price">{oldPrice}</span>
                <p id="new-price">{newPrice}</p>
              </div>
            )}
            {!oldPrice && newPrice && (
              <div className="prices">
                <p id="new-price">{newPrice}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="add-btn">
        <a href="#">افزودن</a>
      </div>
    </div>
  );
}
