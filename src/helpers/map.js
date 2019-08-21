import config from '../gConfig';


export function checkAuth(immediate, callback) {
    window.gapi.auth.authorize({
      'client_id': config.clientId,
      'scope': config.scope,
      'immediate': immediate
    }, callback);
  }
