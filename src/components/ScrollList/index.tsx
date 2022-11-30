import { FC, useMemo, useState } from "react";
import "./styles.css";

interface IProps {
  data: string[];
  height: string | number;
  pageSize?: number;
}

/**
 * 滚动 list, 拉到底部刷新新的一页
 * @param data
 * @param height
 * @returns
 */
export const ScrollList: FC<IProps> = ({ data, height, pageSize = 10 }) => {
  const [page, setPage] = useState(1);

  const currentData = useMemo(
    () => data.slice(0, pageSize * page),
    [pageSize, page]
  );

  return (
    <div
      className="scrollList"
      style={{ height }}
      onScroll={(e) => {
        const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
        if (
          scrollTop + clientHeight >= scrollHeight &&
          currentData.length < data.length
        ) {
          alert(`当前page为${page}`);
          setPage(page + 1);
        }
      }}
    >
      {currentData.map((item, index) => {
        return (
          <div className="item" key={index}>
            {item}
          </div>
        );
      })}
    </div>
  );
};
