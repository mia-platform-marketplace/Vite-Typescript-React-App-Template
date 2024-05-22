/*
 * Copyright © 2022-present Mia s.r.l.
 * All rights reserved
 */

import {ReactNode} from 'react'
import {render, RenderResult} from '@testing-library/react'
import {IntlProvider} from 'react-intl'
import {MemoryRouter} from 'react-router-dom'

let testStrings = {
  'test.string': 'string test',
  'test.values.string': 'string with values {value}'
}

export const setTestStrings = (strings: any): void => {
  testStrings = {
    ...testStrings,
    ...strings
  }
}

export const renderComponent = (children: ReactNode, options = {}, language = 'en'): RenderResult => {
  return render(
    <IntlProvider locale={language} messages={testStrings}>
      {children}
    </IntlProvider>,
    options
  )
}

export const renderComponentWithRouter = (children: ReactNode, path = '/', options = {}, language = 'en'): RenderResult => {
  return renderComponent(
    <MemoryRouter initialEntries={[path]}>
      {children}
    </MemoryRouter>,
    options,
    language
  )
}
