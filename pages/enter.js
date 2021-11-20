import { auth, googleAuthProvider } from '../lib/firebase';

export default function Enter(props) {
  const user = null;
  const username = null;


  return (
    <main>
        {user ?
          !username ? <UsernameForm /> : <SignOutButton />
          :
          <SignInButton />
        }
    </main>
  );
}

// 
function SignInButton() {
  // TODO: OPT hanlde errors with try/cath
  const singInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <button className="btn-google" onClick={singInWithGoogle}>
      <img src={'/google.png'} /> Sing in with Google
    </button>
  );
}

// Sing out button
function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sing out</button>;
}

// 
function UsernameForm() {
  return null
}
 