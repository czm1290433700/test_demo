import { useCallback, useState } from "react";

// 11 | RenderHook：怎么测试React hook？
const useCount = () => {
  const [num, setNum] = useState(0);

  const increase = useCallback(() => {
    setNum(num + 1);
  }, []);

  return { num, increase };
};

export default useCount;
