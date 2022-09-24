import { Table } from "antd";

export const LiquidityMarket = ({
  depositedLiquidity,
}: {
  depositedLiquidity: any[];
}) => {
  console.log(depositedLiquidity);

  return (
    <div className="w-[280px]">
      <Table
        columns={[
          {
            title: "id",
            dataIndex: "id",
          },
        ]}
        rowKey={(record) => record.id}
        dataSource={depositedLiquidity}
      />
    </div>
  );
};
