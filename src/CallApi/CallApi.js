// ************************************ titlesInMain api *******************************

export async function titlesInMain() {
  const response = await fetch(
    "https://snappfood.ir/search/api/v1/desktop/new-home?lat=35.715&long=51.404&optionalClient=WEBSITE&client=WEBSITE&deviceType=WEBSITE&appVersion=8.1.1&UDID=062e72f3-53b7-45ef-a801-b7bfb5d0f6e0&locale=fa"
  );
  if (!response.ok) {
    throw new Error("اطلاعات به درستی دریافت نشده است.");
  }
  const res = await response.json();
  return res;
}

// ************************************ categoryInMain api *******************************

export async function categoryInMain() {
  const response = await fetch(
    "https://snappfood.ir/search/api/v1/desktop/new-home?lat=35.715&long=51.404&optionalClient=WEBSITE&client=WEBSITE&deviceType=WEBSITE&appVersion=8.1.1&UDID=062e72f3-53b7-45ef-a801-b7bfb5d0f6e0&locale=fa"
  );
  if (!response.ok) {
    throw new Error("اطلاعات به درستی دریافت نشده است.");
  }

  const res = await response.json();
  return res;
}

// ************************************ menuInHeaderDown api *******************************

export async function menuInHeaderDown() {
  const response = await fetch(
    "https://snappfood.ir/search/api/v1/desktop/service?lat=35.774&long=51.418&optionalClient=WEBSITE&client=WEBSITE&deviceType=WEBSITE&appVersion=8.1.1&UDID=062e72f3-53b7-45ef-a801-b7bfb5d0f6e0&locale=fa"
  );
  if (!response.ok) {
    throw new Error("اطلاعات به درستی دریافت نشده است.");
  }
  const res = await response.json();
  return res;
}

// ************************************ vendorList api *******************************

export async function vendorList(alias, id) {
  const response = await fetch(
    `https://snappfood.ir/search/api/v1/desktop/vendors-list?lat=35.715&long=51.404&optionalClient=WEBSITE&client=WEBSITE&deviceType=WEBSITE&appVersion=8.1.1&UDID=062e72f3-53b7-45ef-a801-b7bfb5d0f6e0&page=0&page_size=20&filters=%7B%22filters%22:null,%22sortings%22:null%7D&query=&sp_alias=${alias}&city_name=tehran&superType=[${id}]&extra-filter=&vendor_title=&locale=fa`
  );
  if (!response.ok) {
    throw new Error("اطلاعات به درستی از سرور دریافت نشده است.");
  }
  const res = await response.json();
  return res;
}

// ************************************ sortingVendorList api *******************************

export async function sortingVendorList(alias, id, sort) {
  const response = await fetch(
    `https://snappfood.ir/search/api/v1/desktop/vendors-list?lat=35.715&long=51.404&optionalClient=WEBSITE&client=WEBSITE&deviceType=WEBSITE&appVersion=8.1.1&UDID=062e72f3-53b7-45ef-a801-b7bfb5d0f6e0&page=0&page_size=20&filters=%7B%22sortings%22:[%22${sort}%22]%7D&query=&sp_alias=${alias}&city_name=tehran&superType=[${id}]&extra-filter=&vendor_title=&locale=fa`
  );
  if (!response.ok) {
    throw new Error("اطلاعات به درستی از سرور دریافت نشده است.");
  }
  const res = await response.json();
  return res;
}

// ************************************ sortingCategoryVendorList api *******************************

export async function sortingCategoryVendorList(alias, id, sort, catValue) {
  const response =
    await fetch(`https://snappfood.ir/search/api/v1/desktop/vendors-list?lat=35.715&long=51.404&optionalClient=WEBSITE&client=WEBSITE&deviceType=WEBSITE&appVersion=8.1.1&UDID=062e72f3-53b7-45ef-a801-b7bfb5d0f6e0&page=0&page_size=20&filters=%7B%22sortings%22:[%22${sort}%22]%7D&category=%7B%22value%22:${catValue},%22sub%22:[]%7D&query=&sp_alias=${alias}&city_name=tehran&superType=[${id}]&extra-filter=&vendor_title=&locale=fa

  `);
  if (!response.ok) {
    throw new Error("اطلاعات به درستی از سرور دریافت نشده است.");
  }
  const res = await response.json();
  return res;
}

// ************************************ sortingSubofCategoryVendorList api *******************************

export async function sortingSubofCategoryVendorList(
  alias,
  id,
  sort,
  catValue,
  subValue
) {
  const response =
    await fetch(`https://snappfood.ir/search/api/v1/desktop/vendors-list?lat=35.715&long=51.404&optionalClient=WEBSITE&client=WEBSITE&deviceType=WEBSITE&appVersion=8.1.1&UDID=062e72f3-53b7-45ef-a801-b7bfb5d0f6e0&page=0&page_size=20&filters=%7B%22sortings%22:[%22${sort}%22]%7D&category=%7B%22value%22:${catValue},%22sub%22:[${subValue}]%7D&query=&sp_alias=${alias}&city_name=tehran&superType=[${id}]&extra-filter=&vendor_title=&locale=fa

  `);
  if (!response.ok) {
    throw new Error("اطلاعات به درستی از سرور دریافت نشده است.");
  }
  const res = await response.json();
  return res;
}

// ************************************ categoryVendorList api *******************************

export async function categoryVendorList(alias, id, catValue) {
  const response = await fetch(
    `https://snappfood.ir/search/api/v1/desktop/vendors-list?lat=35.715&long=51.404&optionalClient=WEBSITE&client=WEBSITE&deviceType=WEBSITE&appVersion=8.1.1&UDID=062e72f3-53b7-45ef-a801-b7bfb5d0f6e0&page=0&page_size=20&filters=%7B%7D&category=%7B%22value%22:${catValue},%22sub%22:[]%7D&query=&sp_alias=${alias}&city_name=tehran&superType=[${id}]&extra-filter=&vendor_title=&locale=fa`
  );
  if (!response.ok) {
    throw new Error("اطلاعات به درستی از سرور دریافت نشده است.");
  }
  const res = await response.json();
  return res;
}

// ************************************ subCategoryVendorList api *******************************

export async function subCategoryVendorList(alias, id, catValue, subValue) {
  const response = await fetch(
    `https://snappfood.ir/search/api/v1/desktop/vendors-list?lat=35.715&long=51.404&optionalClient=WEBSITE&client=WEBSITE&deviceType=WEBSITE&appVersion=8.1.1&UDID=062e72f3-53b7-45ef-a801-b7bfb5d0f6e0&page=0&page_size=20&filters=%7B%7D&category=%7B%22value%22:${catValue},%22sub%22:[${subValue}]%7D&query=&sp_alias=${alias}&city_name=tehran&superType=[${id}]&extra-filter=&vendor_title=&locale=fa`
  );
  if (!response.ok) {
    throw new Error("اطلاعات به درستی از سرور دریافت نشده است.");
  }
  const res = await response.json();
  return res;
}

// ************************************ filterPriceVendorList api *******************************

export async function filterPriceVendorList(alias, id, filterPrice) {
  const response = await fetch(
    `https://snappfood.ir/search/api/v1/desktop/vendors-list?lat=35.715&long=51.404&optionalClient=WEBSITE&client=WEBSITE&deviceType=WEBSITE&appVersion=8.1.1&UDID=062e72f3-53b7-45ef-a801-b7bfb5d0f6e0&page=0&page_size=20&filters=%7B%22filters%22:[%22${filterPrice}%22]%7D&query=&sp_alias=${alias}&city_name=tehran&superType=[${id}]&extra-filter=&vendor_title=&locale=fa`
  );
  if (!response.ok) {
    throw new Error("اطلاعات به درستی از سرور دریافت نشده است.");
  }
  const res = await response.json();
  return res;
}

// ************************************ filterPriceSortingVendorList  api *******************************

export async function filterPriceSortingVendorList(
  alias,
  id,
  filterPrice,
  sort
) {
  const response = await fetch(
    `https://snappfood.ir/search/api/v1/desktop/vendors-list?lat=35.715&long=51.404&optionalClient=WEBSITE&client=WEBSITE&deviceType=WEBSITE&appVersion=8.1.1&UDID=062e72f3-53b7-45ef-a801-b7bfb5d0f6e0&page=0&page_size=20&filters=%7B%22filters%22:[%22${filterPrice}%22],%22sortings%22:[%22${sort}%22]%7D&query=&sp_alias=${alias}&city_name=tehran&superType=[${id}]&extra-filter=&vendor_title=&locale=fa`
  );
  if (!response.ok) {
    throw new Error("اطلاعات به درستی از سرور دریافت نشده است.");
  }
  const res = await response.json();
  return res;
}

// ************************************ filterPriceSubOrCatValueVendorList api *******************************

export async function filterPriceSubOrCatValueVendorList(
  alias,
  id,
  filterPrice,
  catValue,
  subValue
) {
  const response = await fetch(
    `https://snappfood.ir/search/api/v1/desktop/vendors-list?lat=35.715&long=51.404&optionalClient=WEBSITE&client=WEBSITE&deviceType=WEBSITE&appVersion=8.1.1&UDID=062e72f3-53b7-45ef-a801-b7bfb5d0f6e0&page=0&page_size=20&filters=%7B%22filters%22:[%22${filterPrice}%22]%7D&category=%7B%22value%22:${catValue},%22sub%22:[${subValue}]%7D&query=&sp_alias=${alias}&city_name=tehran&superType=[${id}]&extra-filter=&vendor_title=&locale=fa`
  );
  if (!response.ok) {
    throw new Error("اطلاعات به درستی از سرور دریافت نشده است.");
  }
  const res = await response.json();
  return res;
}

// ************************************ filterPriceSortingSubOrCatValueVendorList api *******************************

export async function filterPriceSortingSubOrCatValueVendorList(
  alias,
  id,
  sort,
  filterPrice,
  catValue,
  subValue
) {
  const response = await fetch(
    `https://snappfood.ir/search/api/v1/desktop/vendors-list?lat=35.715&long=51.404&optionalClient=WEBSITE&client=WEBSITE&deviceType=WEBSITE&appVersion=8.1.1&UDID=062e72f3-53b7-45ef-a801-b7bfb5d0f6e0&page=0&page_size=20&filters=%7B%22filters%22:[%22${filterPrice}%22],%22sortings%22:[%22${sort}%22]%7D&category=%7B%22value%22:${catValue},%22sub%22:[${subValue}]%7D&query=&sp_alias=${alias}&city_name=tehran&superType=[${id}]&extra-filter=&vendor_title=&locale=fa`
  );
  if (!response.ok) {
    throw new Error("اطلاعات به درستی دریافت نشده است.");
  }
  const res = await response.json();
  return res;
}

// ************************************ detailsDynamic1 in page3 api *******************************

export async function detailsDynamic1(code) {
  const response = await fetch(
    `https://snappfood.ir/mobile/v2/restaurant/details/dynamic?lat=35.715&long=51.404&optionalClient=WEBSITE&client=WEBSITE&deviceType=WEBSITE&appVersion=8.1.1&UDID=062e72f3-53b7-45ef-a801-b7bfb5d0f6e0&vendorCode=${code}&locationCacheKey=lat%3D35.715%26long%3D51.404&show_party=1&fetch-static-data=1&locale=fa`
  );
  if (!response.ok) {
    throw new Error("اطلاعات به درستی از سرور دریافت نشده است.");
  }
  const res = await response.json();

  return res;
}

// ************************************ detailsDynamic2 in page3 api *******************************

export async function detailsDynamic2(code) {
  const response = await fetch(
    `https://snappfood.ir/mobile/v2/restaurant/details/dynamic?vendorCode=${code}&optionalClient=PWA&isPickup=0&show_party=1&fetch-static-data=1&superType=protein&client=PWA&deviceType=PWA&appVersion=5.6.6&optionalVersion=5.6.6&UDID=14cf6d6f-1892-490e-bb09-de662e8563b3`
  );
  if (!response.ok) {
    throw new Error("اطلاعات به درستی از سرور دریافت نشده است.");
  }
  const res = await response.json();
  return res;
}

// ************************************ VendorComment in page3 api *******************************

export async function VendorComment(code, sort) {
  const response = await fetch(
    `https://snappfood.ir/mobile/v1/restaurant/vendor-comment?lat=35.774&long=51.418&optionalClient=WEBSITE&client=WEBSITE&deviceType=WEBSITE&appVersion=8.1.1&UDID=062e72f3-53b7-45ef-a801-b7bfb5d0f6e0&vendorCode=${code}&page=0&sortType=${sort}&locale=fa`
  );
  if (!response.ok) {
    throw new Error("اطلاعات به درستی از سرور دریافت نشده است.");
  }
  const res = await response.json();
  return res;
}

// ************************************ coupons in page3 api *******************************

export async function coupons(code) {
  const response = await fetch(
    `https://snappfood.ir/mobile/v1/restaurant/coupons/${code}?lat=35.774&long=51.418&optionalClient=WEBSITE&client=WEBSITE&deviceType=WEBSITE&appVersion=8.1.1&UDID=062e72f3-53b7-45ef-a801-b7bfb5d0f6e0&variable=${code}&locale=fa`
  );
  if (!response.ok) {
    throw new Error("اطلاعات به درستی از سرور دریافت نشده است.");
  }
  const res = await response.json();
  return res;
}

// ************************************ commentInSpecialItem in modalSpecialItem in  page3 api *******************************
export async function commentInSpecialItem(id) {
  const response = await fetch(
    `https://snappfood.ir/mobile/v2/restaurant/productReviews?lat=35.774&long=51.418&optionalClient=WEBSITE&client=WEBSITE&deviceType=WEBSITE&appVersion=8.1.1&UDID=062e72f3-53b7-45ef-a801-b7bfb5d0f6e0&variationIds=${id}&locale=fa`
  );
  if (!response.ok) {
    throw new Error("اطلاعات به درستی از سرور دریافت نشده است.");
    // واسه بعضی از آیتم ها مقدار ندارد مثل کوپن
  }
  const res = await response.json();
  return res;
}
