//import Header from "@/components/Header";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Profile: React.FC = () => {
  return (
    <div>
      {/* <Header /> */}
      <div>
        <div className="flex justify-between items-center">
          <h1>My Listing</h1>
          <Link to={"/add-listing"}>
            <Button>+ Add New Listing</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
