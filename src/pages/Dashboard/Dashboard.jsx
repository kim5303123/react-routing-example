import { NavLink, Outlet } from "react-router-dom";
function Dashboard() {
  // url : /dashboard -> pages\Dashboard.jsx
  return (
    <div>
      <h2 id="dashboard">Dashboard</h2>
      <p>This is the dashboard page</p>
      <ul>
        <li>
          <NavLink to="profile/1004">Profile for user 1004</NavLink>
        </li>
        <li>
          <NavLink to="settings">Settings</NavLink>
        </li>
      </ul>

      {/* 자식 Route 렌더링 영역 */}
      <Outlet />
    </div>
  );
}

export default Dashboard;
