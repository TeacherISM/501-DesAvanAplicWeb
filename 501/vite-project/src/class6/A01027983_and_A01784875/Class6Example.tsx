import { useContext } from 'react';
import { UserContext, UserProvider } from './components/UserContext.tsx';
import TravelRequestForm from './components/TravelRequestForm.tsx';
import ExpenseForm from './components/ExpenseForm.tsx';
import Button from './components/Button.tsx';

const Class6Example = () => {
  const { user, login } = useContext(UserContext);

  return (
    <>
    <div className="p-4">
      <div>
        <Button label="employee" onClick={() => login('employee')} />
        <Button label="manager" onClick={() => login('manager')} />
        <Button label="admin" onClick={() => login('admin')} />
      </div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {user.role === 'employee' && (
        <div>
          <h2 className="text-xl font-semibold">Employee View</h2>
          <TravelRequestForm />
          <ExpenseForm />
        </div>
      )}
      {user.role === 'manager' && (
        <div>
          <h2 className="text-xl font-semibold">Manager View</h2>
          <p>Pending Travel Requests</p>
        </div>
      )}
      {user.role === 'admin' && (
        <div>
          <h2 className="text-xl font-semibold">Admin View</h2>
          <p>User Management</p>
        </div>
      )}
    </div>
    </>
  );
};

export default Class6Example;
