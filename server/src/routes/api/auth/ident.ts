import { Router } from 'express';
import { User } from '../../../models/database/user.model';
import ApiResponseUtils from '../../../util/api/api-response-utils';

const router = Router();

router.use('/', (req, res) => {
  let email = req.query.email;
  if (!email) {
    ApiResponseUtils.sendBadRequestResponse(res, 'Email not provided.');
    return;
  }

  User.findOne({ email }, (err, user) => {
    if (err) {
      ApiResponseUtils.sendInternalErrorResponse(res, 'A problem occurred while checking identification for the given email.');
      throw err;
    }

    if (!user) {
      ApiResponseUtils.sendNotFoundResponse(res, 'No users exist with the given email.');
    }

    ApiResponseUtils.sendOkResponse(res, user);
  });
});

export default router;
