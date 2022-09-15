import { StatusBar } from 'expo-status-bar'
import { Provider } from 'react-redux'
import { useEffect } from 'react'
import { LogBox } from "react-native"
import { NativeBaseProvider, extendTheme } from 'native-base'
import AppNavigator from './navigation'
import store from './store'

export default function App() {
  // avoid warnings showing up in app. comment below code if you want to see warnings.
	useEffect(() => {
		LogBox.ignoreLogs(["Possible Unhandled Promise Rejection ..."]);
	}, []);
  const theme = extendTheme({
    colors: {
      // Add new colorR
      primary: {
        50: '#F0FDFA',
        100: '#CCFBF1',
        200: '#99F6E4',
        300: '#5EEAD4',
        400: '#2DD4BF',
        500: '#14B8A6',
        600: '#0D9488',
        700: '#0F766E',
        800: '#115E59',
        900: '#134E4A',
      },
    },
    components: {
      Button: {
        // Can simply pass default props to change default behaviour of components.
        sizes: {
          sm: {
            px: '3',
            py: '2',
            _text: {
              fontSize: 'sm',
            },
            _icon: {
              size: 'md',
            },
          },
        },
        defaultProps: {
          size: 'sm',
        },
      },
    },
  })
  return (
    <NativeBaseProvider theme={theme}>
      <Provider store={store}>
        <StatusBar />
        <AppNavigator />
      </Provider>
    </NativeBaseProvider>
  )
}
