import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
/*import { signIn, signOut, useSession } from "next-auth/react";*/

import { api } from "../utils/api";
import { LoginIcon } from "../lib/icons";
import { useState } from "react";
import { GenerateCode } from "../components/GenerateCode";

const PAGE_HEADER = "שבצקון";

const Home: NextPage = () => {
  const [code, setCode] = useState("");
  const [generateNewCode, setGenerateNewCode] = useState(false);

  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  function handleLogin() {
    console.log(code);
    setCode("");
  }

  function handleCodeSubmit() {}

  return (
    <>
      <Head>
        <title>{PAGE_HEADER}</title>
        <meta name="description" content="אתר לניהול שבצק" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#026d3d] to-[#152c23]">
        <div className="flex h-64 flex-col items-center gap-10 p-3">
          <h2 className="text-xl">שבצקון 🎖️</h2>
          {generateNewCode ? (
            <GenerateCode
              setGenerateNewCode={setGenerateNewCode}
              handleSubmit={handleCodeSubmit}
            />
          ) : (
            <>
              <div className="flex flex-col gap-2">
                <label htmlFor="code" className="text-md">
                  הכנס קוד תעסוקה:
                </label>
                <div className="flex items-center gap-2">
                  <input
                    id="code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    type="text"
                    className="dir-ltr p-2 text-black focus:border-green-300 focus:outline-none focus:ring"
                    maxLength={20}
                  />
                  <button
                    onClick={() => handleLogin()}
                    className="rounded-md bg-green-500 p-2 hover:bg-green-500/80"
                  >
                    <LoginIcon />
                  </button>
                </div>
                <button
                  onClick={() => setGenerateNewCode(!generateNewCode)}
                  className="w-fit cursor-pointer border-b-2 border-green-700 text-right text-xs"
                >
                  אין לך קוד? הכן לי אחד חדש
                </button>
              </div>
            </>
          )}
        </div>
        {/*<AuthShowcase />*/}
      </main>
    </>
  );
};

export default Home;

/*
const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
*/
