import { FC } from "react";
import useCount from "./useCount";

interface IProps {}

// 11 | RenderHook：怎么测试React hook？
export const RenderHook: FC<IProps> = ({}) => {
  const { num, increase } = useCount();

  return (
    <div>
      <span role="note">{num}</span>
      <button onClick={increase}>增加</button>
    </div>
  );
};
