import { isObject } from 'lodash';

import { setAuthError } from './okapiActions';

const defaultError = {
  code: 'default.error',
  type: 'error',
};

const defaultServerError = {
  code: 'default.server.error',
  type: 'error',
};

const getLoginErrors = (payload) => {
  try {
    if (isObject(payload)) {
      const { errors } = payload;

      return errors;
    } else {
      const { errors } = JSON.parse(payload);

      return errors || [defaultError];
    }
  } catch (e) {
    return [defaultError];
  }
};

function getProcessedErrors(response, status) {
  switch (status) {
    case 422:
      return getLoginErrors(response);
    case 500:
      return [defaultServerError];
    default:
      return [defaultError];
  }
}

export default async function processBadResponse(dispatch, response) {
  let actionPayload;

  try {
    const responseBody = await response.json();
    const responsePayload = responseBody.errorMessage || responseBody;
    actionPayload = getProcessedErrors(responsePayload, response.status);
  } catch (e) {
    actionPayload = [defaultError];
  }
  dispatch(setAuthError(actionPayload));
}
