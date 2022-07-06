import * as contentType from "./content-type";
import * as path2Regexp from "path-to-regexp";
import { form } from "./content-type";
let apiName = "anonymous";
let isRESTfull = false;
const RESTfullParams: any = [];

const checkRESTfullApi = (regexpArr: any, url: string) => {
  path2Regexp.pathToRegexp(url, regexpArr);
  return regexpArr.length > 0;
};

const checkRESTfullParams = (params: any, data: any) => {
  const used: any = [];
  if (data) {
    if (Object.keys(data).length === 0) {
      console.log(`[services api]: ${apiName} missing parameter`);
      return used;
    }
  }

  params.forEach((item: any) => {
    if (data) {
      data[item.name]
        ? used.push([item.name])
        : console.log(
            `[services api]: ${apiName} missing parameter: ${item.name}`
          );
    }
  });
  return used;
};

const handleRESTfullData = (urlParams: any, data: any) => {
  urlParams.forEach((item: any) => {
    delete data[item];
  });

  return data;
};

/*
 *  react axios configs
 */
class AjaxConfig {
  url = "";
  method = "";
  params = {};
  data = {};
  _oldUrl: any;
  transformRequest = [];

  constructor(config: any) {
    Object.assign(this, config);
  }

  set _url(value: any) {
    if (!isRESTfull) {
      isRESTfull = checkRESTfullApi(RESTfullParams, value);
    }

    this.url = value;
  }

  get(url: String) {
    this._url = url;
    this._oldUrl = url;
    this.method = "get";
    return this;
  }

  delete(url: String) {
    this._url = url;
    this._oldUrl = url;
    this.method = "delete";
    return this;
  }

  head(url: String) {
    this._url = url;
    this._oldUrl = url;
    this.method = "head";
    return this;
  }

  options(url: String) {
    this._url = url;
    this._oldUrl = url;
    this.method = "options";
    return this;
  }

  post(url: String) {
    this._url = url;
    this._oldUrl = url;
    this.method = "post";
    return this;
  }

  put(url: String) {
    this._url = url;
    this._oldUrl = url;
    this.method = "put";
    return this;
  }

  patch(url: String) {
    this._url = url;
    this._oldUrl = url;
    this.method = "patch";
    return this;
  }

  format(type: string) {
    if (!contentType[type]) {
      console.log(`[services format: contentType]: ${type} is undefined`);
    }
    this.transformRequest = [contentType[type]];

    return this;
  }

  setApiName(name: string) {
    apiName = name;
    return this;
  }

  setData(data: any) {
    let newData = data;
    this.url = this._oldUrl;
    let index = this.url.indexOf(":");
    if (index > 0) {
      const arr = checkRESTfullParams(RESTfullParams, data);
      const pathToRegexp: any = path2Regexp.pathToRegexp;
      const toPath = pathToRegexp.compile(this.url);
      const RESTfulUrl = toPath(data);

      const newValue = handleRESTfullData(arr, data);
      this.url = RESTfulUrl;
      newData = newValue;
    }

    if (this.method === "get" || this.method === "delete") {
      this.params = newData;
    } else {
      this.data = newData;
    }

    return this;
  }
  setOther(other) {
    if (other === "file") {
      this["responseType"] = "blob";
      return this;
    }
    if (other) {
      this["responseType"] = "arraybuffer";
      return this;
    }
    return this;
  }
}

export default AjaxConfig;
