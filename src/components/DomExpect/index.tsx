import { FC } from "react";

interface IProps {}

// 《6 | DOM断言：页面元素的断言》
export const DomExpect: FC<IProps> = ({}) => {
  return (
    <div>
      <div aria-label="empty_note"></div>
      <div role="note" style={{ display: "none" }} aria-hidden>
        1234
      </div>
      <div role="note" aria-hidden={false}>
        1234
      </div>
    </div>
  );
};
