import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'

import ProcessingOrders from '../Screens/ProcessingOrders'
import CompletedOrders from '../Screens/CompletedOrders'



const TabNavigator = createMaterialTopTabNavigator({
    CompletedOrders: CompletedOrders,
    ProcessingOrders: ProcessingOrders
}, {
        tabBarOptions: {
            style: {
                backgroundColor: "#006d79"
            },
        }
    }
);

export default createAppContainer(TabNavigator)