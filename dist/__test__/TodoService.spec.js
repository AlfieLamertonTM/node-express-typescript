"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoService_1 = require("../src/TodoService");
describe("TodoService tests", function () {
    // get() tests
    it("get() returns the the element containing the id it's passed", function () {
        var fakeTodoService = new TodoService_1.TodoService();
        var testId = "0001";
        var fakeTodoObjectList = [
            {
                "id": "0001",
                "name": "todo1",
                "completed": false
            },
            {
                "id": "0002",
                "name": "todo2",
                "completed": false
            },
            {
                "id": "0003",
                "name": "todo3",
                "completed": false
            }
        ];
        var testGet = fakeTodoService.get(fakeTodoObjectList, testId);
        var expectedOutput = {
            "id": "0001",
            "name": "todo1",
            "completed": false
        };
        expect(testGet).toEqual(expectedOutput);
    });
    // create() tests
    it("given a request body, createTodoObject returns a well formed todo object", function () {
        var testBody = {
            "id": "0001",
            "name": "todo1",
            "completed": false
        };
        var fakeTodoObject = TodoService_1.createTodoObject(testBody);
        var expectedOutput = {
            "id": "0001",
            "name": "todo1",
            "completed": false
        };
        expect(fakeTodoObject).toEqual(expectedOutput);
    });
    it("given an array and object body, create() creates a new todo object into the array passed to it", function () {
        var fakeTodoService = new TodoService_1.TodoService();
        var fakeTodoObjectList = [
            {
                "id": "0001",
                "name": "todo1",
                "completed": false
            },
            {
                "id": "0002",
                "name": "todo2",
                "completed": false
            },
            {
                "id": "0003",
                "name": "todo3",
                "completed": false
            }
        ];
        var testBody = {
            "id": "0004",
            "name": "todo4",
            "completed": false
        };
        var testCreate = fakeTodoService.create(fakeTodoObjectList, testBody);
        var expectedOutput = {
            "id": "0004",
            "name": "todo4",
            "completed": false
        };
        expect(testCreate).toEqual(expectedOutput);
    });
    // delete() tests
    it("given an object ID and an array, delete() returns the array without the object by the ID passed", function () {
        var fakeTodoService = new TodoService_1.TodoService();
        var testId = "0001";
        var fakeTodoObjectList = [
            {
                "id": "0001",
                "name": "todo1",
                "completed": false
            },
            {
                "id": "0002",
                "name": "todo2",
                "completed": false
            },
            {
                "id": "0003",
                "name": "todo3",
                "completed": false
            }
        ];
        var testDelete = fakeTodoService.delete(fakeTodoObjectList, testId);
        var expectedOutput = [
            undefined,
            {
                "id": "0002",
                "name": "todo2",
                "completed": false
            },
            {
                "id": "0003",
                "name": "todo3",
                "completed": false
            }
        ];
        expect(testDelete).toEqual(expectedOutput);
    });
});
