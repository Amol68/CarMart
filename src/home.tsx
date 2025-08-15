import { SignInButton } from "@clerk/clerk-react";
import { Button } from "./components/ui/button";

const Home = () => {
  return (
    <div>
      <Button>
        <SignInButton mode="modal" forceRedirectUrl="/">Sign In</SignInButton>
      </Button>
    </div>
  );
};

export default Home;
