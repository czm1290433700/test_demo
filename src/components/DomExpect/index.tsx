import { FC } from "react";

interface IProps {}

// 《6 | DOM断言：页面元素的断言》
export const DomExpect: FC<IProps> = ({}) => {
  return (
    <div>
      {/* 页面可见 */}
      <div aria-label="empty_note"></div>
      <div
        role="note"
        style={{ display: "none" }}
        className="test hidden"
        aria-hidden
      >
        1234
      </div>
      <div role="note">1234</div>
      {/* 表单验证 */}
      <form aria-label="form">
        <input
          type="text"
          name="username"
          disabled
          aria-disabled
          defaultValue="zhenmin"
        />
        <input type="number" name="age" defaultValue={23} required />
        <input
          type="radio"
          name="sex"
          value="man"
          defaultChecked
          aria-checked
        />
        <input type="radio" name="sex" value="woman" />
      </form>
    </div>
  );
};
