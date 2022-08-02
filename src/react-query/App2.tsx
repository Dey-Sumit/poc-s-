// create a component with a button that toggles b/w two components

import { useState } from "react";
import Users from "./Users";
import Users2 from "./Users2";

const App2 = () => {
  const [showUsers, setShowUsers] = useState(false);

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowUsers(!showUsers)}
      >
        {showUsers ? " Show Users" : "Show Users 2"}
      </button>
      {showUsers ? <Users2 /> : <Users />}
    </div>
  );
};

export default App2;
