const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div className="bg-gray-100 p-4 text-center rounded-md">
        <p className="text-gray-500">Total income</p>
        <span className="text-2xl font-bold">$8,500</span>
      </div>
      <div className="bg-gray-100 p-4 text-center rounded-md">
        <p className="text-gray-500">Savings</p>
        <span className="text-2xl font-bold">$8,500</span>
      </div>
      <div className="bg-gray-100 p-4 text-center rounded-md">
        <p className="text-gray-500">Spending</p>
        <span className="text-2xl font-bold">$8,500</span>
      </div>
    </div>
  );
};

export default Dashboard;
