import { Table } from "antd";
import { PairIcon } from "../base/PairIcon";

export const LiquidityMarket = ({
  depositedLiquidity,
}: {
  depositedLiquidity?: any[];
}) => {
  return (
    <div className="w-[280px]">
      <Table
        columns={[
          {
            title: "Tokens",
            render: (_, record) => <PairIcon pair={record.pool} />,
          },
          {
            title: "Remaining value",
          },
        ]}
        rowKey={(record) => record.id}
        dataSource={depositedLiquidity}
      />
    </div>
  );
};
