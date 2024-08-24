import Nav from '@/components/Nav';
import '@/styles/globals.css';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ClerkProvider>
        <Nav />
        <Component {...pageProps} />
      </ClerkProvider>
    </>
  );
}

// hooks use - state effect params
//  navigate translate cart context localStorage
// nextjs - useRouter()
