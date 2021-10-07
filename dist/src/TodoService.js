"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodoObject = exports.searchTodoObjectListByID = exports.TodoService = void 0;
var inversify_1 = require("inversify");
var TodoService = /** @class */ (function () {
    function TodoService() {
    }
    TodoService.prototype.get = function (todoObjectList, id) {
        var elementPresentInList = searchTodoObjectListByID(todoObjectList, id);
        if (elementPresentInList) {
            return elementPresentInList;
        }
        else {
            return 404;
        }
    };
    TodoService.prototype.create = function (todoObjectList, requestBody) {
        var todoObject = createTodoObject(requestBody);
        var todoObjectID = todoObject.id;
        var elementPresentInList = searchTodoObjectListByID(todoObjectList, todoObjectID);
        if (!elementPresentInList) {
            return todoObject;
        }
        else {
            return 409;
        }
    };
    TodoService.prototype.delete = function (todoObjectList, id) {
        var todoObjectID = function (element) { return element.id === id; };
        var indexOfTodo = todoObjectList.findIndex(todoObjectID);
        if (todoObjectList[indexOfTodo]) {
            delete todoObjectList[indexOfTodo];
            return todoObjectList;
        }
        else {
            return 404;
        }
    };
    TodoService = __decorate([
        inversify_1.injectable()
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;
function searchTodoObjectListByID(storagetodoObjectList, id) {
    for (var i = 0; i < storagetodoObjectList.length; i++) {
        if (storagetodoObjectList[i].id === id) {
            return storagetodoObjectList[i];
        }
    }
    return null;
}
exports.searchTodoObjectListByID = searchTodoObjectListByID;
function createTodoObject(requestBody) {
    var todo = {
        id: requestBody.id,
        name: requestBody.name,
        completed: requestBody.completed,
    };
    return todo;
}
exports.createTodoObject = createTodoObject;
