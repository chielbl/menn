model Meta {
  @doc("The date & time the resources was created")
  @visibility("read","query")
  createdAt: utcDateTime;

  @doc("The date & time the resources was last updated")
  @visibility("read","query")
  updatedAt: utcDateTime;
}
