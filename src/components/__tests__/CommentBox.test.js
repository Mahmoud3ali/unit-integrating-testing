import React from "react";
import { mount } from "enzyme";

import { CommentBox } from "..";
import Root from "../../Root";

let component;

beforeEach(() => {
  component = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  component.unmount();
});

it("has a text area and two buttons", () => {
  expect(component.find("textarea").length).toEqual(1);
  expect(component.find("button").length).toEqual(2);
});

describe("text area", () => {
  beforeEach(() => {
    component
      .find("textarea")
      .simulate("change", { target: { value: "new comment" } });
    component.update();
  });

  it("has a text area that users can type in", () => {
    expect(component.find("textarea").prop("value")).toEqual("new comment");
  });

  it("when form is submitted, text area gets emptied", () => {
    component.find("button").at(0).simulate("submit");
    component.update();
    expect(component.find("textarea").prop("value")).toEqual("");
  });
});
