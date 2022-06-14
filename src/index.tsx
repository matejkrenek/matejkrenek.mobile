import { registerRootComponent } from 'expo';
import App from './App';
import { Logs } from 'expo';

Logs.enableExpoCliLogging();

registerRootComponent(App);
