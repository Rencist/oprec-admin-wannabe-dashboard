import { Routes as RS, Route } from 'react-router-dom';

import RouteItems from './routes';
import NotFound from '../pages/404';

export default function Routes() {
  return (
    <RS>
      {RouteItems.map((route, index) =>
        route.visible ? <Route key={index} {...route} /> : <NotFound />,
      )}
      {/* If Route is not existing */}
      <Route path='*' element={<NotFound />} />
    </RS>
  );
}
