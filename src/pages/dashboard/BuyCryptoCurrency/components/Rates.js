import { useContext } from "react";
import { Btn, Table, Text } from "../../../../components";
import { showSwing } from "../../../../methods";
import _testData from "../_testData";
import Context from "../_context";

export default function Rates() {
  const [page, setPage] = useContext(Context);
  return (
    <div className="Rates d-flex flex-column gap-3">
      <h4 className="h4 m-0 text-dark-blue fw-bold">
        <Text value="dashboard.buy-crypto-currency.body.title" />
      </h4>
      <p className="m-0 text-secondary">
        <Text value="dashboard.buy-crypto-currency.body.last-update" />{" "}
        <span dir="ltr">00/01/09 - 00:14</span>
      </p>
      <Table>
        <thead>
          <tr className="bg-light-gray text-secondary rounded">
            <th>
              <Text value="dashboard.buy-crypto-currency.body.table.header.0" />
            </th>
            <th />
            <th>
              <Text value="dashboard.buy-crypto-currency.body.table.header.1" />
            </th>
            <th>
              <Text value="dashboard.buy-crypto-currency.body.table.header.2" />
            </th>
            <th>
              <Text value="dashboard.buy-crypto-currency.body.table.header.3" />
            </th>
            <th>
              <Text value="dashboard.buy-crypto-currency.body.table.header.4" />
            </th>
            <th />
          </tr>
        </thead>
        <tbody className="text-dark-blue fw-bold font-en">
          {_testData.map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  width="40"
                  className="rounded-circle"
                  src={item.icon}
                  alt={item.enName}
                />
              </td>
              <td>
                <div className="d-flex flex-column text-end w-fit">
                  <span className="text-dark-blue font-fa">{item.faName}</span>
                  <span className="text-secondary">{`${item.enName} - ${item.simbol}`}</span>
                </div>
              </td>
              <td>null</td>
              <td>
                <div dir="ltr" className="d-flex flex-column">
                  <span>${item.priceInDollar.toLocaleString()}</span>
                  <span className={`text-${showSwing(item.swing).color}`}>
                    {item.swing}%
                  </span>
                </div>
              </td>
              <td>{item.priceInToman.toLocaleString()}</td>
              <td>${item.marketVolume.toLocaleString()}</td>
              <td>
                <div className="d-flex flex-center gap-2">
                  <Btn
                    outline
                    variant="violet"
                    className="col"
                    label="dashboard.buy-crypto-currency.body.table.body.btns.0"
                  />
                  <Btn
                    variant="primary"
                    className="col"
                    label="dashboard.buy-crypto-currency.body.table.body.btns.1"
                    onClick={() => setPage("CompleteInformation")}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
