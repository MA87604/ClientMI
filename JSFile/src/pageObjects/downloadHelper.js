"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtractorDownloadHelper = void 0;
const protractor_1 = require("protractor");
const fs = require('fs');
const path = require('path');
class ProtractorDownloadHelper {
    constructor() {
        this.maxReadWaitTime = 10000; // 10 seconds
    }
    removeFile(fileName) {
        this.removeFileAtPath(this.getFilePath(fileName));
    }
    getFileContents(fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            const filePath = this.getFilePath(fileName);
            try {
                yield protractor_1.browser.driver.wait(() => {
                    // Wait until the file exists, download may take some time
                    return fs.existsSync(filePath);
                }, this.maxReadWaitTime);
            }
            catch (err) {
                throw new Error(`File ${filePath} does not exist`);
            }
            return fs.readFileSync(filePath, { encoding: 'utf8' });
        });
    }
    removeFileAtPath(filePath) {
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
    }
    getFilePath(fileName) {
        return path.join(__dirname, fileName);
    }
}
exports.ProtractorDownloadHelper = ProtractorDownloadHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bmxvYWRIZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZU9iamVjdHMvZG93bmxvYWRIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXFDO0FBRXJDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFN0IsTUFBYSx3QkFBd0I7SUFHbkM7UUFGaUIsb0JBQWUsR0FBRyxLQUFLLENBQUMsQ0FBQyxhQUFhO0lBR3ZELENBQUM7SUFFRCxVQUFVLENBQUMsUUFBZ0I7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUssZUFBZSxDQUFDLFFBQWdCOztZQUNwQyxNQUFNLFFBQVEsR0FBVyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BELElBQUk7Z0JBQ0YsTUFBTSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO29CQUM3QiwwREFBMEQ7b0JBQzFELE9BQU8sRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDakMsQ0FBQyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUMxQjtZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNaLE1BQU0sSUFBSSxLQUFLLENBQUMsUUFBUSxRQUFRLGlCQUFpQixDQUFDLENBQUM7YUFDcEQ7WUFFRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDekQsQ0FBQztLQUFBO0lBRU8sZ0JBQWdCLENBQUMsUUFBZ0I7UUFDdkMsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzNCLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRU8sV0FBVyxDQUFDLFFBQWdCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDeEMsQ0FBQztDQUNGO0FBakNELDREQWlDQyJ9