import "@typespec/http";

using TypeSpec.Http;

// Success
model NoContent {
  @statusCode 
  statusCode: 204;
}

// Errors
@error
model Error {
  @example("XXX")
  code: string;

  @example("Error")
  message: string;

  // @example("Extra details about the error")
  // details: unknown;
}

@error
model BadRequest {
  @statusCode 
  statusCode: 400;

  @doc("The status code for the error")
  code: string;

  @doc("A more descriptive message about the error")
  @example("Bad Request")
  message: string;

  // @doc("Detailed information about the error")
  // errors: ErrorDetails[];
}

@error
model Unauthorized {
  @statusCode
  statusCode: 401;

  @doc("The status code for the error")
  code: string;

  @doc("A more descriptive message about the error")
  @example("Unauthorized")
  message: string;
}

@error
model Forbidden {
  @statusCode 
  statusCode: 403;

  @doc("The status code for the error")
  code: string;

  @doc("A more descriptive message about the error")
  @example("Forbidden")
  message: string;
}

@error
model NotFound {
  @statusCode 
  statusCode: 404;

  @doc("The status code for the error")
  code: string;

  @doc("A more descriptive message about the error")
  @example("Not Found")
  message: string;
}

@error
model NotAllowed {
  @statusCode 
  statusCode: 405;

  @doc("The status code for the error")
  code: string;

  @doc("A more descriptive message about the error")
  @example("Not Allowed")
  message: string;
}

@error
model Conflict {
  @statusCode 
  statusCode: 409;

  @doc("The status code for the error")
  code: string;

  @doc("A more descriptive message about the error")
  @example("Conflict")
  message: string;
}

@error
model ServerError {
  @statusCode 
  statusCode: 500;

  @doc("The status code for the error")
  code: string;

  @doc("A more descriptive message about the error")
  @example("Server Error")
  message: string;
}
