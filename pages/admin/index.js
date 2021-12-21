import AuthCheck from '../../components/AuthCheck';


export default function AdminPostsPage(props) {
  return (
    <main>
      <AuthCheck>
        <h1>Hi</h1>
      </AuthCheck>
    </main>
  );
}