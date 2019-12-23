import { Response } from 'express';
import { ApiError } from '../../models/api/api-error.model';

export default class ApiResponseUtils {
  public static sendOkResponse(res: Response, data: any) {
    res.status(200).json(data);
  }

  public static sendEmptyOkResponse(res: Response) {
    res.status(204);
  }

  public static sendBadRequestResponse(res: Response, error: string) {
    const apiError: ApiError = {
      error,
    };

    res.status(400).json(apiError);
  }

  public static sendNotFoundResponse(res: Response, error: string) {
    const apiError: ApiError = {
      error,
    };

    res.status(404).json(apiError);
  }

  public static sendInternalErrorResponse(res: Response, error: string) {
    const apiError: ApiError = {
      error,
    };

    res.status(500).json(apiError);
  }
}
