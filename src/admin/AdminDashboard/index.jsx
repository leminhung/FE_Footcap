import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./styles.scss";

import Chart from "src/admin/components/chart/Chart.jsx";
import FeaturedInfo from "src/admin/components/featuredInfo/FeaturedInfo.jsx";
import WidgetLg from "src/admin/components/widgetLg/WidgetLg.jsx";
import WidgetSm from "src/admin/components/widgetSm/WidgetSm.jsx";

const AdminDashboard = () => {
  const [usersData, setUsersData] = useState([]);
  const [dataChartUser, setDataChartUser] = useState([]);

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${userInfo?.token}`,
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/auth/getallusers`, {
        headers: headers,
      })
      .then((res) => {
        setUsersData(res.data.data);
      })
      .catch((error) => {
        console.log("error userslist", error.response.data.error);
      });
  }, []);

  // Orders data
  const [ordersData, setOrdersData] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/order`, { headers: headers })
      .then((res) => {
        setOrdersData(res.data.data);
      })
      .catch((error) => {
        console.log("error order", error.response.data.error);
      });
  }, []);

  // Logic Chart Calc user active per months
  useEffect(() => {
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const dataEnd = [];
    month.reduce((totalActiveUser, mon) => {
      let dataByMonth = usersData.reduce((total, dt) => {
        return new Intl.DateTimeFormat("en-US", { month: "long" }).format(
          new Date(dt.updatedAt)
        ) === mon
          ? total + 1
          : total;
      }, 0);
      dataEnd.push({
        name: mon,
        "Active user": totalActiveUser,
      });
      return totalActiveUser + dataByMonth;
    }, 0);
    setDataChartUser(dataEnd);
  }, [usersData]);

  return (
    <>
      <div className='homePage'>
        <FeaturedInfo ordersData={ordersData} />
        <Chart
          data={dataChartUser}
          grid={true}
          title={"User Analytics"}
          dataKey='Active user'
        />
        <div className='widgets'>
          <WidgetSm usersData={usersData} />
          <WidgetLg ordersData={ordersData} />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
