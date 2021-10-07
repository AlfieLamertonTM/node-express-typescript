import { createTodoObject, TodoService } from "../src/TodoService";
import { todo } from "../src/models";
import { create } from "domain";

describe("TodoService tests", () => {
  // get() tests
  it("get() returns the the element containing the id it's passed", () => {
    const fakeTodoService = new TodoService();
    const testId: string = "0001";
    const fakeTodoObjectList = [
      {
        id: "0001",
        name: "todo1",
        completed: false,
      },
      {
        id: "0002",
        name: "todo2",
        completed: false,
      },
      {
        id: "0003",
        name: "todo3",
        completed: false,
      },
    ];
    const testGet = fakeTodoService.get(fakeTodoObjectList, testId);
    const expectedOutput = {
      id: "0001",
      name: "todo1",
      completed: false,
    };
    expect(testGet).toEqual(expectedOutput);
  });

  // create() tests
  it("given a request body, createTodoObject returns a well formed todo object", () => {
    const testBody = {
      id: "0001",
      name: "todo1",
      completed: false,
    };
    const fakeTodoObject = createTodoObject(testBody);
    const expectedOutput: todo = {
      id: "0001",
      name: "todo1",
      completed: false,
    };
    expect(fakeTodoObject).toEqual(expectedOutput);
  });

  it("given an array and object body, create() creates a new todo object into the array passed to it", () => {
    const fakeTodoService = new TodoService();
    const fakeTodoObjectList = [
      {
        id: "0001",
        name: "todo1",
        completed: false,
      },
      {
        id: "0002",
        name: "todo2",
        completed: false,
      },
      {
        id: "0003",
        name: "todo3",
        completed: false,
      },
    ];
    const testBody = {
      id: "0004",
      name: "todo4",
      completed: false,
    };
    const testCreate = fakeTodoService.create(fakeTodoObjectList, testBody);
    const expectedOutput: todo = {
      id: "0004",
      name: "todo4",
      completed: false,
    };
    expect(testCreate).toEqual(expectedOutput);
  });

  // delete() tests
  it("given an object ID and an array, delete() returns the array without the object by the ID passed", () => {
    const fakeTodoService = new TodoService();
    const testId: string = "0001";
    const fakeTodoObjectList = [
      {
        id: "0001",
        name: "todo1",
        completed: false,
      },
      {
        id: "0002",
        name: "todo2",
        completed: false,
      },
      {
        id: "0003",
        name: "todo3",
        completed: false,
      },
    ];
    const testDelete = fakeTodoService.delete(fakeTodoObjectList, testId);
    const expectedOutput = [
      undefined,
      {
        id: "0002",
        name: "todo2",
        completed: false,
      },
      {
        id: "0003",
        name: "todo3",
        completed: false,
      },
    ];
    expect(testDelete).toEqual(expectedOutput);
  });
});
