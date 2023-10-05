const BmiStatus = () => {
  return (
    <div className="status-box">
      <p className="active-heading">Adult BMI</p>
      <div>
        <table>
          <thead>
            <tr>
              <th>BMI</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="under-weight">≤ 18.4</td>
              <td>Underweight</td>
            </tr>
            <tr>
              <td className="normal-weight">18.5 - 24.9</td>
              <td>Normal</td>
            </tr>
            <tr>
              <td className="over-weight">25.0 - 39.9</td>
              <td>Overweight</td>
            </tr>
            <tr>
              <td className="obese">&ge; 40.0</td>
              <td>Obese</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default BmiStatus;
