import Button from "./button/Button";
import "./widgetLg.scss";

const WidgetLg = ({ ordersData }) => {
  return (
    <div className='widgetLgComponent mt-5'>
      <h3 className='title'>Latest Transactions</h3>
      <table>
        <tr className='firstTr'>
          <th>Customer</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
        {ordersData.slice(0, 7).map((order) => {
          return (
            <tr key={order._id} className='secondTr'>
              <td className='user'>
                <img src={order.user?.avatar} alt={order.user?.name} />
                <span>{order.user?.name}</span>
              </td>
              <td className='date'>
                {" "}
                {order?.createdAt ? order?.createdAt : "2 Jun 2021"}
              </td>
              <td className='amount'>${order.total_price / 100}</td>
              <td className='status'>
                {order.status ? (
                  <Button type='Approved' />
                ) : (
                  <Button type='Pending' />
                )}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default WidgetLg;
