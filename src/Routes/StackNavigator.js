import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '../Screens/LoginScreen'
import Signup from '../Screens/SignupScreen'
import SignupSuccess from '../Screens/SignupSuccessScreen'
import Orders from '../Screens/Orders'


const AppNavigator = createStackNavigator({
    Login: Login,
    Signup: Signup,
    SuccessLogin: SignupSuccess,
    Orders: Orders
},
    {
        initialRouteName: 'Login',
        headerMode: 'none'
    });

export default createAppContainer(AppNavigator);