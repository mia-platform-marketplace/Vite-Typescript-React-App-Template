import React from 'react'
import ReactDOM from 'react-dom/client'
import {IntlProvider} from 'react-intl'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import App from './App.tsx'
import './index.css'
import messages from './strings'
import PromiseComponent from './components/utils/PromiseComponent/index.tsx'

const navigatorLanguage = navigator.language.substring(0, 2)
const language = messages[navigatorLanguage] ? navigatorLanguage : 'en'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <PromiseComponent promiseFunction={() => messages[language]}>
        {strings => (
          <IntlProvider locale={language} messages={strings}>
            <BrowserRouter>
              <Routes>
                <Route element={<App />} path='/' />
              </Routes>
            </BrowserRouter>
          </IntlProvider>
        )}
    </PromiseComponent>
  </React.StrictMode>
)
