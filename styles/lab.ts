import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const lab = StyleSheet.create({
  GoBack: {
    color: colors.logo,
    fontSize: 40,
    marginTop: 20,
    marginLeft: 10,
  },
  background: {
    height: '100%',
  },
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 700,
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
    marginRight: 30,
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
    transform: [{ translateY: 0 }],
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
    transform: [{ translateX: 50 }, { translateY: 75 }],
  },
  Choose_LightBulb_Box: {
    transform: [{ translateX: 0 }, { translateY: -40 }],
  },
  Light_title: {
    color: colors.title,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
    transform: [{ translateX: 30 }, { translateY: -10 }],
  },
  Light_description: {
    color: colors.description,
    fontSize: 10,
    marginTop: 5,
    marginLeft: 20,
    maxWidth: 300,
    textAlign: 'center',
    transform: [{ translateX: 30 }, { translateY: -10 }],
  },
  Heating_title: {
    color: colors.title,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
    transform: [{ translateX: -5 }, { translateY: -10 }],
  },
  Heating_description: {
    color: colors.description,
    fontSize: 10,
    marginTop: 5,
    marginLeft: 20,
    maxWidth: 300,
    textAlign: 'center',
    transform: [{ translateX: 30 }, { translateY: -10 }],
  },
  Cooling_title: {
    color: colors.title,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
    transform: [{ translateX: 30 }, { translateY: -10 }],
  },
  Cooling_description: {
    color: colors.description,
    fontSize: 10,
    marginTop: 5,
    marginLeft: 20,
    maxWidth: 300,
    textAlign: 'center',
    transform: [{ translateX: 30 }, { translateY: -10 }],
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
    marginBottom: 20,
    marginRight: 'auto',
    marginLeft: 30,
    maxWidth: 200,
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
    marginTop: 20,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  HomeScreenFlatList: {
    gap: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  HomeScreenButton: {
    width: 130,
    height: 130,
    backgroundColor: colors.title,
    borderRadius: 30,
    alignItems: 'center',
    paddingTop: 5,
    marginLeft: 20,
    marginBottom: 20,
  },
  HomeScreenButtonEmpty: {
    width: 130,
    height: 130,
    borderRadius: 30,
    alignItems: 'center',
    paddingTop: 5,
    marginLeft: 20,
    marginBottom: 20,
  },
  HomeScreenButtonHidden: {
    display: 'none',
  },
  HomeScreenAddButton: {
    width: 80,
    height: 80,
    borderRadius: 50,
    alignItems: 'center',
    paddingTop: 15,
    borderWidth: 4,
    borderColor: colors.title,
    marginBottom: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    transform: [{ translateX: 10 }, { translateY: -150 }],
  },
  HomeScreenScrollView: {
    transform: [{ translateX: 5 }],
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
  DeviceIcon: {
    marginTop: 10,
    color: colors.background,
  },
  DeleteButton: {
    marginTop: -60,
    marginBottom: 35,
    marginLeft: 'auto',
    marginRight: 40,
  },
  ReloadButton: {
    marginTop: -40,
    marginBottom: 35,
    marginLeft: 'auto',
    marginRight: 80,
    top: 5,
  },
  DeleteIcon: {
    color: colors.background,
    marginRight: 10,
  },
  HomeAddIcon: {
    marginTop: -20,
    color: colors.title,
    transform: [{ translateX: 0 }, { translateY: 0 }, { scale: 0.7 }],
  },
  DeviceContainer: {
    flex: 1,
    marginTop: 100,
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
  toggleSwitch: {
    position: 'absolute',
    top: 15,
    right: 0,
    transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }, { translateY: -225 }],
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
    transform: [{ translateY: 80 }],
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
    transform: [{ translateY: 50 }],
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
    transform: [{ scale: 0.5 }],
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
    transform: [{ translateY: -80 }],
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
    marginTop: -30,
    transform: [{ translateY: 0 }],
  },
  buttonColorPickerText: {
    color: colors.title,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 12,
  },
  sliderTextLights: {
    color: colors.title,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -30,
    transform: [{ translateX: -20 }],
  },
  skipButton: {
    color: colors.title,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: 30,
    marginTop: 20,
    marginBottom: 20,
  },
  containerDeviceOff: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -100,
  },
  TitleDeviceOff: {
    color: colors.title,
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 0,
  },
  DescriptionDeviceOff: {
    color: colors.description,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 0,
  },
  NoRoomTitle: {
    color: colors.title,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 60,
    marginLeft: 0,
  },
  NoRoomDescription: {
    color: colors.description,
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  DeviceSelectedTitle: {
    color: colors.title,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 60,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  DeviceSelectedButton: {
    backgroundColor: colors.accent,
    width: 200,
    height: 50,
    borderRadius: 30,
    marginTop: 60,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  DeviceSelectedButtonText: {
    color: colors.title,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 12,
  },
  toggleSwitchHomeScreen: {
    position: 'absolute',
    top: -5,
    right: 0,
  },
  DevicesOffTitle: {
    color: colors.title,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 160,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  DevicesOffDescription: {
    color: colors.description,
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  AnimationItem: {
    flex: 1,
    position: 'absolute',
    backgroundColor: colors.background,
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
    borderTopRightRadius: 1000,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
})