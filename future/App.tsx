import * as React from "react";
import RelayEnvironment from "../src/relay/RelayEnvironment";
import Newsfeed from "../src/components/Newsfeed";
import LoadingSpinner from "../src/components/LoadingSpinner";
import Sidebar from "../src/components/Sidebar";

export default function App(): React.ReactElement {
  return (
    <RelayEnvironment>
      <React.Suspense fallback={<LoadingSpinner />}>
        <div className="app">
          <Newsfeed />
          <Sidebar />
        </div>
      </React.Suspense>
    </RelayEnvironment>
  );
}
