export default function Paginate(items, currentPage, pageSize) {
  const startIndex = (currentPage - 1) * pageSize;
  const lastIndex = startIndex + pageSize;

  return items.slice(startIndex, lastIndex);
}
