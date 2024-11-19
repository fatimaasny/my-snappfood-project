import { useState, useEffect } from "react";

// useFetch    ---> useEffect

export function useFetch(apiFn, parser) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // first way
        // const response = await apiFn();
        // setData(response);

        // second way
        const response = await apiFn();
        const parserData = await parser(response);
        setData(parserData);
      } catch (error) {
        setError("خطایی رخ داده است، مجددا تلاش کنید.");
      }
      setIsLoading(false);
    };
    fetchData();
  }, [apiFn]);

  return { isLoading, data, error };
}

// useFetch2    ---> sendData
export function useFetch2(apiFn, parser) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  const fetchData = async (body) => {
    setIsLoading(true);
    try {
      // console.log("apiFn: ", apiFn);
      const response = await apiFn(body);

      // console.log("response in useFetch2: ", response);
      const parserData = await parser(response);
      // console.log("parserData in useFetch2: ", parserData);
      setData(parserData);
      setError();
    } catch (error) {
      setError("خطایی رخ داده است، مجددا تلاش کنید.");
    }
    setIsLoading(false);
  };

  return { isLoading, data, error, fetchData, setData };
}

//

//

//

//

//

//

//

//

// export function useMenuHeader(apiFn) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [data, setData] = useState([]);
//   const [error, setError] = useState();

//   useEffect(() => {
//     const fetchMenu = async () => {
//       setIsLoading(true);
//       try {
//         const res = await apiFn();
//         setData(res.data.items);
//         setError();
//       } catch (error) {
//         setError("خطایی رخ داده است، مجددا تلاش کنید.");
//       }
//       setIsLoading(false);
//     };
//     fetchMenu();
//   }, [apiFn]);

//   return { isLoading, data, error };
// }

// export function useCategoryMain(apiFn) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [data, setData] = useState([]);
//   const [error, setError] = useState();

//   useEffect(() => {
//     const fetchMenu = async () => {
//       setIsLoading(true);
//       try {
//         const res = await apiFn();
//         setData(res.data.result[0]["data"]["cuisines"]);
//         setError();
//       } catch (error) {
//         setError("خطایی رخ داده است، مجددا تلاش کنید.");
//       }
//       setIsLoading(false);
//     };
//     fetchMenu();
//   }, [apiFn]);

//   return { isLoading, data, error };
// }

// export function useTitleMain(apiFn) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [listFirst, setListFirst] = useState([]);
//   const [titleFirst, setTitleFirst] = useState();
//   const [listSecond, setListSecond] = useState([]);
//   const [titleSecond, setTitleSecond] = useState();

//   const [error, setError] = useState();

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const res = await apiFn();
//         setListFirst(res.data.result[3]["data"]["restaurants"]);
//         setTitleFirst(res.data.result[3]["title"]);
//         setListSecond(res.data.result[4]["data"]["restaurants"]);
//         setTitleSecond(res.data.result[4]["title"]);
//         setError();
//       } catch (error) {
//         setError("خطایی رخ داده است، لطفا مجددا تلاش کنید1111.");
//       }
//       setIsLoading(false);
//     };
//     fetchData();
//   }, []);

//   return { isLoading, titleFirst, listFirst, titleSecond, listSecond, error };
// }

// export function useSortSelected(apiFn, params, hideFn) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [list, setList] = useState([]);
//   const [error, setError] = useState();

//   useEffect(() => {
//     hideFn();
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const res = await apiFn(params.alias, params.catId);
//         setList(res.data.extra_sections.filters.top.data);

//         setError();
//       } catch (error) {
//         setError("خطایی رخ داده است، مجددا تلاش کنید.");
//       }
//       setIsLoading(false);
//     };
//     fetchData();
//   }, [params]);

//   return { isLoading, list, error };
// }

// export function useCategoriesSidebar(apiFn, params) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [data, setData] = useState([]);
//   const [error, setError] = useState();
//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const res = await apiFn(params.alias, params.catId);
//         setData(res.data.extra_sections.categories.data);
//         setError();
//       } catch (error) {
//         setError("خطایی رخ داده است، مجددا تلاش کنید.");
//       }
//       setIsLoading(false);
//     };
//     fetchData();
//   }, [params]);
//   return { isLoading, data, error };
// }

// export function useFilterPrice(apiFn, params) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [listPricing, setListPricing] = useState([]);
//   const [error, setError] = useState();

//   useEffect(() => {
//     const fetchPricing = async () => {
//       setIsLoading(true);
//       try {
//         const res = await apiFn(params.alias, params.catId);
//         const allArray = res.data.extra_sections.filters.sections;
//         for (let i = 0; i < allArray.length; i++) {
//           if (allArray[i]["section_name_fa"] === "کلاس قیمتی") {
//             setListPricing(allArray[i]["data"]);
//             return;
//           } else {
//             setListPricing([]);
//           }
//         }
//         setError();
//       } catch (err) {
//         setError(
//           "اطلاعات به درستی از سرور دریافت نشده است، بعدا مجددا تلاش کنید."
//         );
//       }
//       setIsLoading(false);
//     };
//     fetchPricing();
//   }, [params]);

//   return { isLoading, listPricing, error };
// }

// export function useToggleButtons(apiFn, params) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [list, setList] = useState([]);
//   const [error, setError] = useState();

//   useEffect(() => {
//     const fetchFilter = async () => {
//       setIsLoading(true);
//       try {
//         const res = await apiFn(params.alias, params.catId);
//         const allArray = res.data.extra_sections.filters.sections;
//         for (let i = 0; i < allArray.length; i++) {
//           if (allArray[i]["section_name_fa"] === "فیلتر") {
//             setList(allArray[i]["data"]);
//             return;
//           } else {
//             setList([]);
//           }
//         }
//         setError();
//       } catch (err) {
//         setError("خطایی رخ داده است، بعدا مجددا تلاش کنید.");
//       }
//       setIsLoading(false);
//     };
//     fetchFilter();
//   }, [params]);

//   return { isLoading, list, error };
// }

// export function useAllApiMainAllRes(
//   apiFn1,
//   apiFn2,
//   apiFn3,
//   apiFn4,
//   apiFn5,
//   apiFn6,
//   apiFn7,
//   apiFn8,
//   apiFn9,
//   apiFn10,
//   params
// ) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [list, setList] = useState([]);
//   const [error, setError] = useState();

//   let res = [];

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         // **********************   filterPriceVendorList ****************
//         if (
//           params.filterPrice !== "null" &&
//           params.sorting === "null" &&
//           params.catValue === "null" &&
//           params.subValue === "null"
//         ) {
//           res = await apiFn1(params.alias, params.id, params.filterPrice);
//         }
//         // **********************   filterPriceSortingVendorList ****************
//         else if (
//           params.filterPrice !== "null" &&
//           params.sorting !== "null" &&
//           params.catValue === "null" &&
//           params.subValue === "null"
//         ) {
//           res = await apiFn2(
//             params.alias,
//             params.id,
//             params.filterPrice,
//             params.sorting
//           );
//         }
//         // **********************   filterPriceSubOrCatValueVendorList ****************
//         else if (
//           params.filterPrice !== "null" &&
//           params.sorting === "null" &&
//           params.catValue !== "null"
//         ) {
//           res = await apiFn3(
//             params.alias,
//             params.id,
//             params.filterPrice,
//             params.catValue,
//             params.subValue
//           );
//         }
//         // **********************   filterPriceSortingSubOrCatValueVendorList ****************
//         else if (
//           params.filterPrice !== "null" &&
//           params.sorting !== "null" &&
//           params.catValue !== "null"
//         ) {
//           res = await apiFn4(
//             params.alias,
//             params.id,
//             params.sorting,
//             params.filterPrice,
//             params.catValue,
//             params.subValue
//           );
//         }

//         //

//         // **********************   sortingSubofCategoryVendorList ****************
//         else if (
//           params.filterPrice === "null" &&
//           params.sorting !== "null" &&
//           params.catValue !== "null" &&
//           params.subValue !== "null"
//         ) {
//           res = await apiFn5(
//             params.alias,
//             params.catId,
//             params.sorting,
//             params.catValue,
//             params.subValue
//           );
//         }
//         // **********************   sortingCategoryVendorList ****************
//         else if (
//           params.filterPrice === "null" &&
//           params.sorting !== "null" &&
//           params.catValue !== "null" &&
//           params.subValue === "null"
//         ) {
//           res = await apiFn6(
//             params.alias,
//             params.catId,
//             params.sorting,
//             params.catValue
//           );
//         }
//         // **********************   sortingVendorList ****************
//         else if (
//           params.filterPrice === "null" &&
//           params.sorting !== "null" &&
//           params.catValue === "null" &&
//           params.subValue === "null"
//         ) {
//           res = await apiFn7(params.alias, params.catId, params.sorting);
//         }
//         // **********************   categoryVendorList ****************
//         else if (
//           params.filterPrice === "null" &&
//           params.sorting === "null" &&
//           params.catValue !== "null" &&
//           params.subValue === "null"
//         ) {
//           res = await apiFn8(params.alias, params.catId, params.catValue);
//         }
//         // **********************   subCategoryVendorList ****************
//         else if (
//           params.filterPrice === "null" &&
//           params.sorting === "null" &&
//           params.catValue !== "null" &&
//           params.subValue !== "null"
//         ) {
//           res = await apiFn9(
//             params.alias,
//             params.catId,
//             params.catValue,
//             params.subValue
//           );
//         }
//         // **********************   vendorList ****************
//         else if (
//           params.filterPrice === "null" &&
//           params.sorting === "null" &&
//           params.catValue === "null" &&
//           params.subValue === "null"
//         ) {
//           res = await apiFn10(params.alias, params.catId);
//         }

//         let allList = res.data.finalResult;
//         const finalList = [];

//         for (let i = 0; i < allList.length; i++) {
//           finalList.push(allList[i]["data"]);
//         }
//         setList(finalList);
//         setError();
//       } catch (error) {
//         setError("خطایی رخ داده است بعدا مجدد تلاش کنید.");
//       }
//       setIsLoading(false);
//     };
//     fetchData();
//   }, [params]);

//   return { isLoading, list, error };
// }

export function useInfoOfRes(apiFn, params) {
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState({ title: "", commentCount: 0, logo: "" });
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await apiFn(params.code);

        setItem({
          title: res.data.vendor.title,
          commentCount: res.data.vendor.commentCount,
          logo: res.data.vendor.logo,
          discount: res.data.vendor.discountValueForView,
        });
        setError();
      } catch (err) {
        setError("خطایی رخ داده است، مجددا اقدام کنید.");
      }
      setIsLoading(false);
    };
    fetchData();
  }, [apiFn]);
  return {
    isLoading,
    item,
    error,
  };
}

export function useMenuOfRes(apiFn, params) {
  const [isLoading, setIsLoading] = useState(false);
  const [listTitles, setListTitles] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await apiFn(params.code);

        const oldArray = res.data.menus;
        const finalArray = [];

        for (let i = 0; i < oldArray.length; i++) {
          finalArray.push(oldArray[i]["category"]);
        }
        setListTitles(finalArray);

        setError();
      } catch (error) {
        setError("خطایی رخ داده است، مجددا تلاش کنید.");
      }
      setIsLoading(false);
    };
    fetchData();
  }, [apiFn]);

  return { isLoading, listTitles, error };
}

export function useMainEachResOtherList(apiFn, params) {
  const [isLoadingTitles, setIsLoadingTitles] = useState(false);
  const [listTitles, setListTitles] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchDataTitles = async () => {
      setIsLoadingTitles(true);
      try {
        const res = await apiFn(params.code);
        setListTitles(res.data.menus);
      } catch (error) {
        setError("اطلاعات سایر تایتل ها به درستی دریافت نشده است.");
      }
      setIsLoadingTitles(false);
    };
    fetchDataTitles();
  }, [params]);

  return { isLoadingTitles, listTitles, error };
}

export function useMainEachResCoupons(apiFn, params) {
  const [isLoadingCoupons, setIsLoadingCoupons] = useState(false);
  const [listCoupons, setListCoupons] = useState([]);
  useEffect(() => {
    const fetchDataCoupons = async () => {
      setIsLoadingCoupons(true);
      try {
        const res = await apiFn(params.code);
        setListCoupons(res.data.coupons);
      } catch (error) {
        // setError("اطلاعات کوپن ها به درستی دریافت نشده است.");
        setListCoupons([]);
      }
      setIsLoadingCoupons(false);
    };
    fetchDataCoupons();
  }, [params]);

  return { isLoadingCoupons, listCoupons };
}

export function useModalCommentForData(apiFn, params) {
  const [isLoading, setIsLoading] = useState(false);
  const [listData, setListData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await apiFn(params.code);
        setListData(res.data.vendor);
      } catch (error) {
        setError("خطایی رخ داده است، مجددا اقدام کنید.");
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { isLoading, listData, error };
}

export function useModalCommentForComments(apiFn, params) {
  const [isLoadingComment, setIsLoadingComment] = useState(false);
  const [listComment, setListComment] = useState([]);
  const [error, setError] = useState();
  const [sortParams, setSortParams] = useState([]);

  const [isToggleBtn, setIsToggleBtn] = useState("new");
  const ToggleHandler = (value) => {
    setIsToggleBtn(value);
  };
  useEffect(() => {
    const fetchData = async () => {
      setIsLoadingComment(true);
      try {
        const res = await apiFn(params.code, isToggleBtn);
        setListComment(res.data.comments);
        setSortParams(res.data.sort.params);
      } catch (error) {
        setError("خطایی رخ داده است، مجددا تلاش کنید.");
      }
      setIsLoadingComment(false);
    };
    fetchData();
  }, [isToggleBtn]);
  return {
    isLoadingComment,
    listComment,
    error,
    sortParams,
    isToggleBtn,
    ToggleHandler,
  };
}

export function useModalSpecialItem(apiFn, id) {
  const [isLoading, setIsLoading] = useState(false);
  const [commentListInSpecialItem, setCommentListInSpecialItem] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await apiFn(id);
        setCommentListInSpecialItem(res.data.comments);
      } catch (error) {
        setCommentListInSpecialItem([]);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return { isLoading, commentListInSpecialItem, error };
}
