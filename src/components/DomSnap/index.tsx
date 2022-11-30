import { FC } from "react";

interface IProps {}

// 12 | 快照测试：怎么保障组件 UI 的完整？
export const DomSnap: FC<IProps> = ({}) => {
  return (
    <form aria-label="form">
      <input
        type="text"
        name="username"
        disabled
        aria-disabled
        defaultValue="zhenmin"
        aria-label="form_username"
      />
      <input
        type="number"
        name="age"
        defaultValue={23}
        required
        aria-label="form_age"
      />
      <input
        type="radio"
        name="sex"
        value="man"
        defaultChecked
        aria-checked
        aria-label="form_sex"
      />
      <input type="radio" name="sex" value="woman" aria-label="form_sex" />
    </form>
  );
};
