import "./FilterPrice.css";
export default function FilterPrice() {
  return (
    <div className="filter-price-component">
      <h4>کلاس قیمتی</h4>
      <div className="list-filter-price-component">
        <div className="item-filter-price-component">همه</div>
        <div className="item-filter-price-component">اقتصادی</div>
        <div className="item-filter-price-component">متوسط</div>
        <div className="item-filter-price-component">گران</div>
      </div>
    </div>
  );
}
