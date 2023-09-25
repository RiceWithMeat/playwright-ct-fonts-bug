import { beforeMount } from '@playwright/experimental-ct-react/hooks';
import '../static/assets/fonts.css';

beforeMount(async ({ App }) => (
  <App />
));
