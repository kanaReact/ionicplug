import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonButton, IonContent, IonInput, IonRouterOutlet, IonText, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import { IonicNativePluginExample} from './Plugin/IonicNativePluginExample'
import { useEffect, useState } from "react";

setupIonicReact();

const App: React.FC = () => {
  const [title, setTitle] = useState<string>();
  const [text, setText] = useState<string>();

  IonicNativePluginExample.addListener("EVENT_LISTENER_NAME", ({ message }) =>
    console.log(message)
  );

  const { NativeMethod, NotifyListeners,echo } = IonicNativePluginExample;

  useEffect(() => {
    const getTitle = async () => {
    //  const { message } = await NativeMethod();
   // const { message } = await echo({ value: "dddd" });;
      setTitle("sdfdsfsd");
    };
    getTitle();
  }, []);

  NotifyListeners();

  return (
    <IonApp>
    
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home title={title} />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
