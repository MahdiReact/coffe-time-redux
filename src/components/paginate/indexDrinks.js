import _ from "lodash";

export const Paginate = (drinks, currentPage, perPage) => {

  const startIndex = (currentPage - 1) * perPage;
  return _(drinks).splice(startIndex).take(perPage).value();
};
