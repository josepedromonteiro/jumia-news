import {api, keys} from '../../environments/environment';

/**
 * A list of functions/helpers, it helps remove code duplications
 */

export namespace ApiUtils {
  export function buildUrl(enpointInfo: string) {
    return api.nytimesBaseUrl + enpointInfo + '&api-key=' + keys.nytimesKey;
  }
}

export namespace WebUtils {
  export function goToLink(link: string) {
    window.open(link, '_blank');
  }

}

