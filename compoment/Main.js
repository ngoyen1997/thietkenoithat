import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import HomeScreen from './Home'
import DetailScreen from './Detail'
import DetailScreen2 from './Detail2'
import Login from './Login'
//import Login from './Login';
const stack = createStackNavigator({
   // Login: Login,
    Home: HomeScreen,
    Detail: DetailScreen,
    Detail2: DetailScreen2,
},{
    headerMode: "none",
});
const tab = createBottomTabNavigator({
    Home: {
        screen:stack,
        navigationOptions:{
            tabBarLabel: "Trang chu"
        }
    },
    Profile: Login,
},{
    tabBarOptions:{
        labelStyle:{
            fontSize:17,
            top:-10,
        },
        activeBackgroundColor: '',
        activeTintColor:'',
        inactiveBackgroundColor:'',
        inactiveTintColor: '',
    }
})
const App = createAppContainer(tab);
export default App;