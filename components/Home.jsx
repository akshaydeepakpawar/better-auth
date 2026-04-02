"use client";

import React, { useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Home = () => {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [session, router]);

  if (!session) {
    return <p>Redirecting...</p>;
  }

  return (
    <div className="flex flex-col p-4 gap-y-4">
      <p>Logged in as {session.user.name}</p>
      <Button onClick={() => authClient.signOut()}>SignOut</Button>
    </div>
  );
};

export default Home;
