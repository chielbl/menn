model PaginatedMeta {
  @example(1)
  page: integer;

  @example(10)
  pageSize: integer;

  @example(100)
  total: integer;

  @example(10)
  totalPages: integer;

  @example(2)
  nextPage: integer;

  @example(0)
  prevPage: integer;
}
