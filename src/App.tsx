import React from 'react';

import AppRouter from '@/router/AppRouter';

const App = () => {
  // Remove the initial boot spinner once React has committed its first paint.
  React.useEffect(() => {
    document.getElementById('app-boot')?.remove();
  }, []);

  return <AppRouter />;
};

export default App;
