import React from "react";
import { mount } from "enzyme";

import Root from "../../Root";
import { CommentList } from "..";

let component;
const initialState = {
  comments: ["comment 1", "comment 2"],
};

beforeEach(() => {
  component = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it("creates one li per each comment", () => {
  expect(component.find("li").length).toEqual(initialState.comments.length);
});

it("shows text for each comment", () => {
  component.find("li").forEach((item, index) => {
    expect(item.render().text().trim()).toEqual(initialState.comments[index]);
  });
});
