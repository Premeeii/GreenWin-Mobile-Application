import { StyleSheet } from "react-native";

export const myStyle = StyleSheet.create({
  search: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginBottom: 10,
  },

  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
  },

  mainprofile: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#aaa",
    padding: 15,
    backgroundColor: "#307A59",
    flexDirection: "row",
  },

  textmainprofile: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
    marginTop: 10,
  },

  mainservice: {
    marginTop: 25,
    borderRadius: 10,
    borderColor: "#aaa",
    padding: 10,
    backgroundColor: "#DAEEE5",
  },

  topic: {
    fontWeight: "bold",
    fontSize: 32,
    alignSelf: "center",
    marginBottom: 20,
    color: "#307A59",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
  },

  button: {
    backgroundColor: "#307A59",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
    cursor: "pointer",
    width: 312,
    alignSelf: "center",
  },

  buttonLogin: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  dropdown: {
    height: 50,
    borderColor: "#aaa",
    borderRadius: 10,
    padding: 2,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },

  textId: {
    fontWeight: "bold",
    marginLeft: 2,
    marginTop: 5,
  },

  servicebutton: {
    marginTop: 25,
    backgroundColor: "#307A59",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
    cursor: "pointer",
    width: 312,
    alignSelf: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  texttopic: {
    color: "#307A59",
    fontWeight: "bold",
    fontSize: 32,
    fontFamily: "inter",
    marginTop: 50,
    marginLeft: 30,
  },

  textProfile: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
  },

  inputreg: {
    borderColor: "#aaa",
    borderRadius: 10,
    padding: 2,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#E8EAEA",
    height: 37,
  },
  mainreg: {
    marginHorizontal: 30,
    marginVertical: 15,
  },

  firstbg: {
    flex: 1,
    justifyContent: "center", //contentจะอยู่ตรงกลาง
    backgroundColor: "#307A59",
  },

  firstbutton: {
    marginTop: 25,
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignItems: "center",
    marginVertical: 10,
    cursor: "pointer",
    width: 312,
    alignSelf: "center",
    flexDirection: "column",
  },

  firsttext: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#307A59",
  },

  firsticon: {
    width: 300,
    height: 100,
    marginLeft: 85,
    marginBottom: 50,
  },

  edittopic: {
    marginTop: 50,
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
  },

  editinput: {
    borderColor: "#aaa",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#E8EAEA",
    height: 37,
    width: 312,
    alignSelf: "center",
  },
  imageedit: {
    width: 150,
    height: 150,
    alignSelf: "center",
    borderRadius: 100,
    marginBottom: 20,
  },
  editsection: {
    fontWeight: "bold",
    marginLeft: 20,
    marginBottom: 5,
  },
  topicRequest: {
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 32,
    marginTop: 100,
    marginBottom: 20,
  },
  mainRequest: {
    backgroundColor: "#DAEEE5",
    width: 369,
    height: 219,
    alignSelf: "center",
    marginTop: 50,
    borderRadius: 15,
    padding: 10,
  },

  sectionRequset: {
    color: "#307A59",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
    marginTop: 10,
  },

  contentRequest: {
    color: "black",
    marginLeft: 10,
    marginTop: 10,
    fontSize: 15,
  },

  cancelbutton: {
    backgroundColor: "#E55555",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 20,
    cursor: "pointer",
    width: 312,
    alignSelf: "center",
  },
  requestbox: {
    backgroundColor: "#E8EAEA",
    width: 369,
    height: 389,
    padding: 10,
    borderRadius: 15,
  },

  selectrequest: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ced3cf",
    borderRadius: 15,
  },

  requestdetail: {
    backgroundColor: "#DAEEE5",
    width: 369,
    height: 469,
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
  },

  confirmContainer: {
    alignSelf: "center",
    justifyContent: "center",
    flex: 1,
  },

  confirmPopup: {
    width: 373,
    height: 240,
    backgroundColor: "#DAEEE5",
    borderRadius: 10,
    justifyContent: "center",
  },

  logoutPopup: {
    width: 273,
    height: 181,
    backgroundColor: "#DAEEE5",
    borderRadius: 10,
    justifyContent: "center",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // สีดำโปร่ง 50%
    justifyContent: "center",
    alignItems: "center",
  },

  acceptButton: {
    width: 110,
    height: 32,
    borderRadius: 10,
    backgroundColor: "#E55555",
    alignItems: "center",
    marginRight: 15,
  },

  cancelButton: {
    width: 110,
    height: 32,
    borderRadius: 10,
    backgroundColor: "#F8F8F8",
    alignItems: "center",
  },

  //new-firstpage
  newcontainer: {
    flex: 1,
    backgroundColor: "#E3F5E8",
  },
  headerTextWrap: {
    marginLeft: 45, // as a Motorcycle Taxi Driver
    marginTop: 100,
  },
  title: {
    fontSize: 40,
    fontWeight: '900',
    color: "#2B1845",
    letterSpacing: 2,
  },
  subtitle: {
    marginTop: -2,
    fontSize: 18,
    fontWeight: '400',
    color: "#3A2852",
    opacity: 0.8,
  },
  topImage: {
    width: "100%",
    height: "70%",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 504, 
    zIndex: 10, 
  },
  bottomImage: {
    width: "100%",
    height: "100%",
  },
  riderWrap: {
  flexDirection: "row",      // ให้ข้อความอยู่บรรทัดเดียว
  justifyContent: "center",  // ให้อยู่ตรงกลางจอ
  alignItems: "center",
  position: "absolute",
  bottom: 60,
  width: "100%",              // ให้กินเต็มจอ เพื่อจัดกลางได้
  zIndex: 30,
  },
  rider: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "white",
    fontSize: 14,
  },
  text: {
  fontWeight: "500",
  color: "white",
  fontSize: 14,
  },
});


