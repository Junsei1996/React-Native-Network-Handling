export default class NetworkResponse {
  constructor(data, errorMsg, code) {
    if (data !== null && errorMsg !== null && code !== null) {
      // Constructor with three parameters
      console.log("1");
      this.data = data;
      this.errorMsg = errorMsg;
      this.code = code;
    } else if (data !== null && errorMsg !== null) {
      // Constructor with two parameters
      console.log("2");
      this.data = data;
      this.errorMsg = errorMsg;
      this.code = "200";
    } else if (data !== null && code !== null) {
      // Constructor with two parameters
      console.log("3");
      this.data = data;
      this.errorMsg = "Something went wrong";
      this.code = code;
    } else if (errorMsg !== null && code !== null) {
      // Constructor with two parameters
      console.log("4");
      this.errorMsg = errorMsg;
      this.code = code;
    } else if (data !== null) {
      // Constructor with only data
      console.log("5");
      this.data = data;
      this.errorMsg = "Something went wrong";
      this.code = "200";
    } else if (errorMsg !== null) {
      // Constructor with only errorMsg
      console.log("6");
      this.errorMsg = errorMsg;
      this.code = "400";
    } else if (code !== null) {
      // Constructor with only code
      console.log("7");
      this.data = "Something went wrong";
      this.code = code;
    } else {
      // Default constructor
      console.log("8");
      this.data = "Something went wrong";
      this.errorMsg = "Something went wrong";
      this.code = "400";
    }
  }
}