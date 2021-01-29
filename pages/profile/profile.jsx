import Header from '../../components/header/header';
import { useRouter } from 'next/router';

const Profile = () => {
  const router = useRouter();

  return (
    <div>
      <Header />

      <main className="container mx-auto">
        <h1 className="text-xl">
          Welcome to your profile page {router.query.username}
        </h1>
      </main>
    </div>
  );
};

export default Profile;
