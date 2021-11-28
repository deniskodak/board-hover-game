import React, { useEffect, useState } from "react";
import getApiModes from "./api";
import { Container, SubContainer } from "./modules/common";
import CustomLoader from "./modules/loader";
import ControllersContainer from "./modules/controllersContainer";
import GameTable from "./modules/table";
import HoverLogger from "./modules/hoverLogger";
import AppContext from "./context";

const initialAppContext = {
  modes: null,
  pickedMode: null,
  hoverHistory: [],
};

function App() {
  const [appState, setAppState] = useState(initialAppContext);

  const setModes = async () => {
    const modes = await getApiModes();
    setAppState((state) => ({ ...state, modes: { ...modes } }));
  };

  useEffect(() => {
    setModes();
  }, []);

  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      <Container>
        {appState.modes ? (
          <>
            <SubContainer>
              <ControllersContainer />
              <GameTable boardSize={appState.pickedMode} />
            </SubContainer>
            <HoverLogger />
          </>
        ) : (
          <CustomLoader />
        )}
      </Container>
    </AppContext.Provider>
  );
}

export default App;
