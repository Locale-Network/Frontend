import React from 'react';
import { BarChart, Bar, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Nov 21, 2021', amountPaid: 53424, estimatedPayment: 0 },
  { date: 'Dec 11, 2021', amountPaid: 52835, estimatedPayment: 0 },
  { date: 'Jan 10, 2022', amountPaid: 51869, estimatedPayment: 0 },
  { date: 'Feb 20, 2022', amountPaid: 60000, estimatedPayment: 0 },
  { date: 'Mar 20, 2022', amountPaid: 60000, estimatedPayment: 0 },
  { date: 'Apr 20, 2022', amountPaid: 60000, estimatedPayment: 0 },
  { date: 'May 20, 2022', amountPaid: 60000, estimatedPayment: 0 },
  { date: 'Jun 20, 2022', amountPaid: 60000, estimatedPayment: 0 },
  { date: 'Jul 20, 2022', amountPaid: 60000, estimatedPayment: 0 },
  { date: 'Aug 20, 2022', amountPaid: 60000, estimatedPayment: 0 },
  { date: 'Sep 20, 2022', amountPaid: 60000, estimatedPayment: 0 },
];

const Repayment = () => {
  return (
    <div className="repayment">
      <h2>Repayments</h2>
      <div className='repayment-container'>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            {/* <XAxis dataKey="date" /> */}
            {/* <YAxis /> */}
            <Tooltip />
            <Bar dataKey="amountPaid" fill="#65c397" name="Paid to date" />
            <Bar dataKey="estimatedPayment" fill="#82ca9d" name="Est. payment" />
          </BarChart>
        </ResponsiveContainer>

        <table>
          <thead style={{ backgroundColor: '#ccc' }}>
            <tr>
              <th>Source</th>
              <th>Payment Date</th>
              <th>Amount Expected</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tugende</td>
              <td>Nov 21, 2021</td>
              <td>$53,424.66</td>
            </tr>
            <tr>
              <td>Cauris</td>
              <td>Dec 11, 2021</td>
              <td>$52,835.69</td>
            </tr>
            <tr>
              <td>Almavest Basket #4</td>
              <td>Dec 30, 2021</td>
              <td>$102,739.60</td>
            </tr>
            <tr>
              <td>Cauris</td>
              <td>Jan 10, 2022</td>
              <td>$51,369.86</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Repayment;