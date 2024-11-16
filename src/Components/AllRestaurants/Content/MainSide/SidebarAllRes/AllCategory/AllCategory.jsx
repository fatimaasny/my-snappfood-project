import styles from "./AllCategory.module.css";

import AllCategoryItem from "./AllCategoryItem/AllCategoryItem";
import Error from "../../../../../Error/Error";

export default function AllCategory({
  isLoading,
  error,
  params,
  list,
  handleListOverlayBack,
  handleShowOverlayBack,
  handleTitleBack,
}) {
  if (error) {
    return <Error title={error} />;
  }

  return (
    <>
      {list.length > 0 && !isLoading && (
        <div className={styles["all-category-component"]}>
          <p className={styles.title}>همه دسته‌بندی‌ها</p>
          <div className={styles["list-of-all-category-item"]}>
            {list.map((item) => (
              <AllCategoryItem
                key={item.id}
                source={item.image}
                title={item.title}
                sub={item.sub || "nothing"}
                alias={params.alias}
                id={params.catId}
                sorting={params.sorting}
                catValue={item.value}
                filterPrice={params.filterPrice}
                handleListOverlayBack={handleListOverlayBack}
                handleShowOverlayBack={handleShowOverlayBack}
                handleTitleBack={handleTitleBack}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
