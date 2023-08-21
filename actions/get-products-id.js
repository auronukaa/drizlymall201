export const getProductsId = async (params) => {
  const URL =
    process.env.NEXT_APP_API_URL +
    `/api/products?populate=*&filters[$and][0][uid][$ne]=${params.produktetId}&filters[$and][0][id][$lte]=8`;

  const res = await fetch(URL, {
    headers: {
      Authorization: "Bearer " + process.env.NEXT_APP_API_TOKEN,
    },
  });

  return res.json();
};
