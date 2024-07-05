import React from 'react'
import {createRoot, Root} from 'react-dom/client'
import {IntlProvider} from 'react-intl'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {renderWithQiankun, qiankunWindow} from 'vite-plugin-qiankun/dist/helper'

import App from './App.tsx'
import './index.css'
import messages from './strings'
import PromiseComponent from './components/utils/PromiseComponent/index.tsx'

let root: Root

interface Props {
  variant?: string
  [key: string]: any
}

const navigatorLanguage = navigator.language.substring(0, 2)
const language = messages[navigatorLanguage] ? navigatorLanguage : 'en'

const RootComponent = (pathname: string): React.ReactElement => {
  return (
    <React.StrictMode>
      <PromiseComponent promiseFunction={() => messages[language]}>
        {(strings: any) => (
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
}

function retrieveContainer (props: Props = {}): Element {
  const {container} = props
  return container ? container.querySelector('#root') : document.querySelector('#root')
}

function render (props: Props = {}) : void {
  const qiankunBase = document.querySelector('qiankun-head base') as any as { href: string | undefined }
  let {pathname} = new URL(qiankunBase?.href ?? document.baseURI, window.document.baseURI)

  // Per l'esecuzione in locale e SPA
  if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    pathname = './'
  }

  root = createRoot(retrieveContainer(props))
  root.render(RootComponent(pathname))
}

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({})
}

renderWithQiankun({
  mount (props) {
    render(props)
  },
  unmount () {
    root.unmount()
  },
  bootstrap () {},
  update () {}
})
