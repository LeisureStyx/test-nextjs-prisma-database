
interface User {
  id: number;
  name: string;
  email: string;
}

const Users = ({ users }: { users: User[] }) => {
  return (
    <div>
      <h1>Users</h1>
      <table className="border border-slate-500 border-collapse">
        <thead>
          <tr>
            <th className="border border-slate-600">ID</th>
            <th className="border border-slate-600">Name</th>
            <th className="border border-slate-600">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border border-slate-700">{user.id}</td>
              <td className="border border-slate-700">{user.name}</td>
              <td className="border border-slate-700">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const UsersPage = ({ users }: { users: User[] }) => {

  if (!users) {
    return <p>Loading...</p>
  }

  return <Users users={users} />
}

export default UsersPage;

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/database');
  const users = await res.json();
  
  return {
    props: {
      users
    },
    revalidate: 1, // revalidate data every 1 second
  }
}
