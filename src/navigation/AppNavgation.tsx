import { DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider } from "@react-navigation/native";
import SplashScreen from "../screen/authenticate/SplashScreen";
import { useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomNavigationBar } from "../screen/BottomNavigationBar";
import OTPLogin from "../screen/authenticate/LoginByOtp";
import RegisterScreen from "../screen/authenticate/RegisterScreen";
import OtpScreen from "../screen/authenticate/OtpScreen";
import Drawer from "../reuseableComponent/Drawer";
const AuthStack = createNativeStackNavigator();
function AppNavigation() {
    const scheme = useColorScheme();
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
          setLoader(false);
        }, 4000);
        return () => clearTimeout(timer); 
      }, []);
    if (loader) {
        return <SplashScreen />
    };
    const theme = {
        dark: scheme === 'dark' ? DarkTheme.dark : DefaultTheme.dark,
        colors: scheme === 'dark' ? DarkTheme.colors : DefaultTheme.colors,
    };
    console.log("theme", theme)
    return (
        <ThemeProvider value={theme}>
            <NavigationContainer theme={theme}>       
                    <AuthStack.Navigator>
                        <AuthStack.Screen name='Login' component={OTPLogin} options={{ headerShown: false }} />
                        <AuthStack.Screen name='OtpScreen' component={OtpScreen} options={{ headerShown: false }} />
                        <AuthStack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }} />
                        <AuthStack.Screen name='Home' component={BottomNavigationBar} options={{ headerShown: false }} />    
                        <AuthStack.Screen name='Drawer' component={Drawer} options={{ headerShown: false }} />    
                    </AuthStack.Navigator>
                    </NavigationContainer>
                </ThemeProvider>
        
            )
        }
        export default AppNavigation;