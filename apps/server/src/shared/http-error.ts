export class HttpError extends Error {
  readonly status: number;

  constructor(status: number, message?: string) {
    super(message);

    // Ensure the name of this error is the class name
    this.name = this.constructor.name;
    this.status = status;

    // This clips the constructor invocation from the stack trace.
    Error.captureStackTrace(this, this.constructor);
  }
}

export class BadRequest extends HttpError {
  constructor(message?: string) {
    super(400, message);
  }
}

export class Unauthorized extends HttpError {
  constructor(message?: string) {
    super(401, message);
  }
}

export class Forbidden extends HttpError {
  constructor(message?: string) {
    super(403, message);
  }
}

export class NotFound extends HttpError {
  constructor(message?: string) {
    super(404, message);
  }
}

export class MethodNotAllowed extends HttpError {
  constructor(message?: string) {
    super(405, message);
  }
}

export class Conflict extends HttpError {
  constructor(message?: string) {
    super(409, message);
  }
}

export class ServerError extends HttpError {
  constructor() {
    super(500, 'Server Error');
  }
}
