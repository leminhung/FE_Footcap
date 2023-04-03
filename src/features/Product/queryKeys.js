export const productKeys = {
  all: ["products"],
  details: () => [...productKeys.all, "detail"],
  detail: (param) => [...productKeys.details(), param],
  relates: () => [...productKeys.all, "relate"],
  relate: (param) => [...productKeys.relates(), param],
  lists: () => [...productKeys.all, "list"],
  // list: (filters) => [...productKeys.lists(), { filters }],
  list: (param) => [...productKeys.lists(), param],
  pagination: (page) => [...productKeys.all, "pagination", page],
  infinite: () => [...productKeys.all, "infinite"],
};
