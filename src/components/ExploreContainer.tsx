import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react';
import { useState } from 'react';
import './ExploreContainer.css';
import { IonicNativePluginExample } from './../Plugin/IonicNativePluginExample'
import { title } from 'process';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [text, setText] = useState<string>();
  const [title, setTitle] = useState<string>();
  const { NativeMethod, NotifyListeners, echo } = IonicNativePluginExample;
  const testMe = async () => {

    setTitle("Loading...");
    const { message } = await echo({ value: text+"" });;
    setTitle(message);
  }


  return (
    <div className="container">

      <IonInput value={text}
        placeholder="Enter Input"
        onIonChange={e => setText(e.detail.value!)}
        id="nameInput">
      </IonInput>

      <IonButton color="primary"
        onClick={() => testMe()} >Check</IonButton>

      <br />
      <strong>{title}</strong>

      {/* <IonItem style={{height : 200, background : 'red'}}>
        <IonInput value={text}></IonInput>
      </IonItem> */}


    </div>
  );
};

export default ExploreContainer;
