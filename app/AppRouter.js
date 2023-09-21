import { createRouter } from 'expo-router';
import Home from "./index"
import Donations from "../../../AUT/2023/Sem 2/COMP602/Sprint1_SafeLink/components/home/donations/Donations";

const Router = createRouter({
  '/': Home,
  '/donations': Donations,
});

export default Router;