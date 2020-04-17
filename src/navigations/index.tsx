import React from 'react';
import { Scene,  Router, Stack } from 'react-native-router-flux';
import {LandingPage,AuthendicationPage,TermsPage} from '../containers';



const Action = () => (
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key="landing" component={LandingPage}  />
        <Scene key="auth" component={AuthendicationPage}  />
        <Scene key="terms" component={TermsPage}  />
      </Stack>
    </Router>
  );

  export default Action;