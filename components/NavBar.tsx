import Link from 'next/link';
import MaxWidthWrapper from './MaxWidthWrapper';

import getSession from '@/lib/getSession';
import UserButton from './UserButton';
import { SignIn } from './auth/sign-in';

const NavBar = async () => {
  // const user = undefined;
  // const session = getSession();
  // const user = session?.user;

  const session = await getSession();
  const user = session?.user;
  return (
    <nav className="'sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/">
            case <span className="text-green-600">Fit</span>
          </Link>

          <div className="h-full flex items-center space-x-4 ">
            {user ? <UserButton user={user} /> : <SignIn />}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};
export default NavBar;
