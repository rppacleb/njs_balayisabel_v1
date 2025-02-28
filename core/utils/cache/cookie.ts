import jscookie from "js-cookie";

export default class COOKIE {
  private name: string;
  private attributes: {
    expires: number;
    path: string;
    sameSite: "strict" | "lax" | "none";
  };

  constructor() {
    this.name = "hms_app_session";
    this.attributes = {
      expires: 7,
      path: "/",
      sameSite: "strict",
    };
  }

  set(name: string = this.name, value: string, customAttr = {}) {
    jscookie.set(name, value, { ...this.attributes, ...customAttr });

    return {
      msg: "success",
    };
  }

  get(name = this.name) {
    return jscookie.get(name);
  }

  remove(name = this.name) {
    jscookie.remove(name, { ...this.attributes });

    return {
      msg: "success",
    };
  }
}

export const cookie = new COOKIE();
