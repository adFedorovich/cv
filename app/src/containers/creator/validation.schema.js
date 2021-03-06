import * as yup from 'yup';
import { CLIENT_ERRORS } from '../../constatnts/error.constants';

export const schema = yup.object().shape({
  name: yup.string().required(CLIENT_ERRORS.REQUIRED),
  lastname: yup.string().required(CLIENT_ERRORS.REQUIRED),
  email: yup.string()
    .required(CLIENT_ERRORS.REQUIRED)
    .email(CLIENT_ERRORS.INVALID_EMAIL),
  position: yup.string()
    .required(CLIENT_ERRORS.REQUIRED),
  phoneNumber: yup.string()
    .required(CLIENT_ERRORS.REQUIRED),
  summary: yup.array().of(
    yup.object().shape({
      text: yup.string().required(CLIENT_ERRORS.REQUIRED),
    }),
  ),
});
