"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inforBirstLoginPO = void 0;
const protractor_1 = require("protractor");
class inforBirstLoginPO {
    constructor() {
        this.userName = (0, protractor_1.element)(protractor_1.by.id("username"));
        this.password = (0, protractor_1.element)(protractor_1.by.id("password"));
        this.loginButton = (0, protractor_1.element)(protractor_1.by.css("button.btn.submit"));
    }
}
exports.inforBirstLoginPO = inforBirstLoginPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mb3JCaXJzdExvZ2luUE8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZU9iamVjdHMvaW5mb3JCaXJzdExvZ2luUE8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQW9GO0FBR3BGLE1BQWEsaUJBQWlCO0lBTTFCO1FBRUksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQTtJQUMzRCxDQUFDO0NBSUo7QUFmRCw4Q0FlQyJ9