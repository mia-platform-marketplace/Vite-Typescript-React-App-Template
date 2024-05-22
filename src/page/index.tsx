import {Button, MappingAlgorithm, ConfigProvider, theme} from 'antd'
import React, {useState} from 'react'

const TemplatePage: React.FC = () => {
  const [themeProvided, setThemeProvided] = useState<string>('darkAlgorithm')

  return (
        <ConfigProvider
      theme={{
        token: {
          colorPrimary: 'red',
          borderRadius: 2,
          colorBgContainer: 'green'

        },
        algorithm: theme[themeProvided as keyof typeof theme] as MappingAlgorithm | MappingAlgorithm[]
      }}
        >
            {'Pagina template'}
            <Button onClick={() => setThemeProvided(prev => prev === 'darkAlgorithm' ? 'defaultAlgorithm' : 'darkAlgorithm')} >button</Button>
        </ConfigProvider>
  )
}

export default TemplatePage
