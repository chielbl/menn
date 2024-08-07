model Meta {
  @doc("The date & time the resources was created")
  @visibility("read")
  createdOn: utcDateTime;

  @doc("The date & time the resources was last updated")
  @visibility("read")
  updatedOn: utcDateTime;
}
