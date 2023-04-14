import { StyleSheet, TextInput } from 'react-native';
import { colors } from './colors';

export const lab = StyleSheet.create({
    GoBack: {
        color: colors.logo,
        fontSize: 40,
        marginTop: 20,
        marginLeft: 10,
        backgroundColor: colors.background,
    },
    background: {
        backgroundColor: colors.background,
        height: '100%',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerName: {
        flex: 1,
        alignItems: 'center',
        marginTop: 40,
        marginLeft: 20,
        maxWidth: 300,
    },
    Logo: {
        color: colors.logo,
        fontSize: 40,
    },
    button: {
        marginTop: 80,
    },
    Welcome_title: {
        color: colors.title,
        fontSize: 30,
        fontWeight: 'bold',
    },
    Welcome_description: {
        color: colors.description,
        fontSize: 20,
        marginTop: 5,
        maxWidth: 300,
        textAlign: 'center',
    },
    button_onboarding: {
        marginTop: 80,
        width: 200,
        height: 50,
        backgroundColor: colors.accent,
        borderRadius: 30,
        marginBottom: 60,
    },
    button_onboarding_text: {
        color: colors.title,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 12,
    },
    image: {
    flex: 1,
    width: 300,
  },
  input: {
    marginTop: 20,
    padding: 10,
    borderRadius: 30,
    fontSize: 20,
    width: 300,
    color: colors.description,
  },
  button_onboarding_next: { 
    color: colors.title,
        marginTop: 'auto',
        marginLeft: 40,
        width: 200,
        height: 50,
        backgroundColor: colors.accent,
        borderRadius: 30,
        marginBottom: 60,
    },
    Room_title: {
        color: colors.title,
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 20,
    },
    containerRoom: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    button_onboarding_room: {
        marginTop: 'auto',
        width: 200,
        height: 50,
        borderRadius: 30,
        marginBottom: 60,
        backgroundColor: colors.accent,
    },
    button_room: {
        flex: 1,
        marginTop: 25,
    },
    button_room_text: {
        marginTop: 30,
        fontSize: 25,
        color: colors.title, 
        marginLeft: -100,
    },
    containerLight: {
        flex: 1,
        marginTop: 20,
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: 'center',
        borderColor: colors.accent,
    },
    label: {
        margin: 8,
    },
    imageLight: {
        flex: 1,
        width: 400,
        marginLeft: 30,
        transform: [{ translateY: 0}],
    },
    LightTitle: {
        color: colors.title,
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 20,
    },
    button_light: {
        marginLeft: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        width: 320,
        height: 100,
        borderColor: colors.logo,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: -50,

    },
    Choose_LightBulb: {
        transform: [{ translateX: 50},{ translateY: 75}], 
    },
    Choose_LightBulb_Box: {
        transform: [{ translateX: 0},{ translateY: -40}],
    },
    Light_title: {
        color: colors.title,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 20,
        transform: [{ translateX: 30},{ translateY: -10}],
    },
    Light_description: {
        color: colors.description,
        fontSize: 10,
        marginTop: 5,
        marginLeft: 20,
        maxWidth: 300,
        textAlign: 'center',
        transform: [{ translateX: 30},{ translateY: -10}],  
    },
    Heating_title: {
        color: colors.title,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 20,
        transform: [{ translateX: -5},{ translateY: -10}],
    },
    Heating_description: {
        color: colors.description,
        fontSize: 10,
        marginTop: 5,
        marginLeft: 20,
        maxWidth: 300,
        textAlign: 'center',
        transform: [{ translateX: 30},{ translateY: -10}],  
    },
     Cooling_title: {
        color: colors.title,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 20,
        transform: [{ translateX: 30},{ translateY: -10}],
    },
    Cooling_description: {
        color: colors.description,
        fontSize: 10,
        marginTop: 5,
        marginLeft: 20,
        maxWidth: 300,
        textAlign: 'center',
        transform: [{ translateX: 30},{ translateY: -10}],  
    },
    containerHomeScreen: {
        flex: 1,
        alignItems: 'center',
        marginTop: 80,
        marginLeft: 20,
        maxWidth: 300,
    },
    HomeScreenTitle: {
        color: colors.title,
        fontSize: 30,
        fontWeight: 'regular',
        marginTop: 20,
        marginLeft: -100,
    },
    User: {
        color: colors.title,
        fontSize: 30,
        fontWeight: 'regular',
        marginTop: -10,
        marginLeft: -100,
        marginBottom: 20,
    },
    User1: {
        color: colors.title,
        fontSize: 30,
        fontWeight: 'regular',
        marginTop: 20,
        marginLeft: -100,
    },
    User2: {
        color: colors.title,
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: -100,
    },
    HomeScreenBox: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // marginTop: 20,
        // marginLeft: 10,
        // marginBottom: -60,
        marginTop: 20,
        gap: 20,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start', 
        justifyContent: 'center',
        marginLeft: 20,

    },
    HomeScreenButton: {
        width: 130,
        height: 130,
        backgroundColor: colors.title,
        borderRadius: 30,
        // marginBottom: 20,
        alignItems: 'center',
        paddingTop: 5,
    },
    HomeScreenAddButton: {
        width: 130,
        height: 130,
        backgroundColor: colors.background,
        borderRadius: 30,
        // marginBottom: 20,
        alignItems: 'center',
        paddingTop: 15,
        borderWidth: 4,
        borderColor: colors.title,
        marginBottom: 50,
    },
    HomeScreenScrollView: {
        transform: [{ translateX: 5}],
    },
    HomeScreenButton_Text: {
        color: colors.background,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    SetRoomBackContainer: {
        flexDirection: 'row',
    },
    SetRoomBackContainerName: {
        marginTop: 50,
        marginLeft: 10,
        color: colors.title,
        fontSize: 20,   
        fontWeight: 'bold',
    },
    SetRoomDeivceName: {
        width: 200,
        height: 45,
        backgroundColor: colors.accent,
        marginTop: 20,
        marginLeft: 30,
        color: colors.title,
        fontSize: 18,
        fontWeight: 'bold',
        borderRadius: 50,
    },
    SetRoomDeviceContainer: {
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 40,
        marginBottom: -60,
    },
    SetRoomDeivce: {
        width: 60,
        height: 60,
        backgroundColor: colors.title,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 50,
        paddingBottom: 10,
    },
    SetRoomDeivceSelected: {
        width: 60,
        height: 60,
        backgroundColor: colors.accent,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 50,
        paddingBottom: 10,
    },
    HomeIconSelected: {
        marginTop: 10,
        color: colors.title,
    },
    HomeIcon: {
        marginTop: 10,
        color: colors.background,
    },
    HomeAddIcon: {
        marginTop: 5,
        color: colors.title,
    },
    DeviceContainer: {
        flex: 1,
        marginTop: 100,
        // marginLeft: 40,
        maxWidth: 300,
        marginLeft: 40,
        marginBottom: 50,
    }, 
    iconContainer: {
        marginTop: 20,
        gap: 20,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start', 
        justifyContent: 'center',
        marginLeft: 20,

    },
    icon: {
        width: 50,
        height: 50,
        borderColor: colors.logo,
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    AddDevice_title: {
        color: colors.title,
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 60,
        marginLeft: 0,
    },
    inputAddDevice: {
        marginLeft: 50,
        marginTop: 20,
        padding: 10,
        borderRadius: 30,
        fontSize: 20,
        width: 300,
        color: colors.description,
    },
    iconSelected: {
        width: 50,
        height: 50,
        borderColor: colors.accent,
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    toggleSwitch : {
        // flex: 1,
        // marginTop: 60,
        // alignSelf: 'center',
        position: 'absolute',
        top: 0,
        right: 0,
        transform: [{ scaleX: 1.3 }, { scaleY: 1.3 },{ translateY: -205}]
    },
    SetRoomLightOff: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    SetRoomLightOffText: {
        color: colors.description,
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 0,
    },
    chooseColorText: {
        color: colors.title,
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 20,
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        transform: [{ translateY: 80}],
    },
    chooseColorTextOff: {
        opacity: 0,
    },
    chooseDeviceText: {
        color: colors.title,
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 20,
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        transform: [{ translateY: 50}],
    },
    chooseDeviceTextOff: {
        opacity: 0,
    },
    containerSlider: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sliderText: {
        color: colors.title,
        fontSize: 30,
        fontWeight: 'bold',
    },
    containerCooling: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    CoolingStateText: {
        flex: 1,
        color: colors.title,
        fontSize: 60,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 0,
        marginBottom: 20,
    },
    CoolingStateButton: {
        flex: 1,
        width: 50,
        height: 100,
        borderWidth: 1,
        borderColor: colors.title,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{scale: .5}],
    },
    CoolingStateButtonText: {
        color: colors.title,
        fontSize: 40,
        fontWeight: 'bold',
    },
    CoolingStateButtonTextBottom: {
        color: colors.title,
        fontSize: 20,
        fontWeight: 'bold',
        transform: [{translateY: -100}],
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    buttonColorPicker: { 
        color: colors.title,
        marginLeft: 40,
        width: 200,
        height: 50,
        backgroundColor: colors.accent,
        borderRadius: 30,
        transform: [{ translateY: 20}],
    },
    buttonColorPickerText: {
        color: colors.title,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 12,
    },











});