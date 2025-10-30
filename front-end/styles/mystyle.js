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
    height: 40,
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
    height: 369,
    padding: 10,
    borderRadius: 15,
    marginHorizontal:22
    
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
    zIndex:10
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
  //////////////////
  //////////////////
  //new-greenwin
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
    fontWeight: "900",
    color: "#2B1845",
    letterSpacing: 2,
  },
  
  subtitle: {
    marginTop: -2,
    fontSize: 18,
    fontWeight: "400",
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
    flexDirection: "row", // ให้ข้อความอยู่บรรทัดเดียว
    justifyContent: "center", // ให้อยู่ตรงกลางจอ
    alignItems: "center",
    position: "absolute",
    bottom: 60,
    width: "100%", // ให้กินเต็มจอ เพื่อจัดกลางได้
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

  newfirstbutton: {
    position: "absolute",
    marginTop: 265, // ระยะห่างจากด้านบนของปุ่ม
    justifyContent: "center", // จัดกึ่งกลางข้อความในปุ่ม
    borderRadius: 25, // ทำให้มุมของปุ่มโค้งมน
    alignItems: "center",
    marginVertical: 10,
    cursor: "pointer", // เปลี่ยนเคอร์เซอร์เมื่อโฮเวอร์
    width: 304,
    height: 49,
    alignSelf: "center", // จัดกึ่งกลางปุ่มในแนวนอน
    backgroundColor: "#13714C",
    zIndex: 20,
  },

  newfirsttext: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },

  newsecondbutton: {
    position: "absolute",
    marginTop: 330,
    justifyContent: "center",
    borderRadius: 25,
    alignItems: "center",
    marginVertical: 10,
    cursor: "pointer",
    width: 304,
    height: 49,
    alignSelf: "center",
    backgroundColor: "#ffffff",
    zIndex: 20,
  },

  newsecondtext: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#13714C",
  },

  //new Login Page
  logincontainer: {
    flex: 1,
  },
  loginbottomImage: {
    width: "100%",
    height: "100%",
    position: "absolute", // ภาพอยู่ด้านหลัง
  },
  logincontent: {
    flex: 1,
    justifyContent: "center", // จัดกึ่งกลางแนวตั้ง
    alignItems: "center",     // จัดกึ่งกลางแนวนอน
    paddingHorizontal: 20, // ระยะห่างด้านข้าง
    marginTop: 50, 
  },
  logintitle: {
    position: "absolute",
    fontSize: 35,
    fontWeight: '900',
    letterSpacing: 2,
    marginLeft: 58,
    marginTop: 350,
  },
  loginerror: {
    color: "red",
    marginBottom: 15,
  },
  logininput: {
    width: 304,
    height: 49,
    backgroundColor: "#F2F2F2",
    borderRadius: 25,
    paddingHorizontal: 24, // ระยะห่างด้านใน
    fontSize: 18,
    fontWeight: 500,
    marginBottom: 15,
  },
  loginsign: {
    justifyContent: "center", // จัดกึ่งกลางข้อความในปุ่ม
    borderRadius: 25, // ทำให้มุมของปุ่มโค้งมน
    alignItems: "center",
    marginVertical: 10, 
    cursor: "pointer", // เปลี่ยนเคอร์เซอร์เมื่อโฮเวอร์
    width: 304,
    height: 49,
    backgroundColor: "#13714C",
  },
  loginWrap: {
    position: "absolute",
    flexDirection: "row",      // ให้ข้อความอยู่บรรทัดเดียว
    justifyContent: "center",  // ให้อยู่ตรงกลางจอ
    width: "100%",              // ให้กินเต็มจอ เพื่อจัดกลางได้
    zIndex: 30,
    bottom: 220,
  },
  logintext: {
    fontWeight: "500",
    color: "#C1C1C1",
    fontSize: 14,
  },
  loginsignup: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "#9A9A9A",
    fontSize: 14,
  },

  //new-Signup Page
   signcontainer: {
    flex: 1,
  },
  signbottomImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  signcontent: {
    flex: 1,
    justifyContent: "flex-start", // จัดกึ่งกลางแนวตั้ง
    alignItems: "center",     // จัดกึ่งกลางแนวนอน
    paddingHorizontal: 20, // ระยะห่างด้านข้าง
    marginTop: 280, 
  },
  signtitle: {
    position: "absolute",
    fontSize: 35,
    fontWeight: '900',
    letterSpacing: 2,
    marginLeft: 58,
    marginTop: 320, 
  },
  signerror: {
    color: "red",
    marginBottom: 15,
  },
  signinput: {
    width: 304,
    height: 49,
    borderBottomWidth: 1.5, // เส้นข้างล่าง
    borderBottomColor: "#F2F2F2", // สีเส้น
    fontSize: 16,
    color: "#13714C",
    marginBottom: 15,
    paddingVertical: 8, // ช่องว่างบนล่าง
  },
  signcreatebutoon: {
    justifyContent: "center", // จัดกึ่งกลางข้อความในปุ่ม
    borderRadius: 25, // ทำให้มุมของปุ่มโค้งมน
    alignItems: "center",
    marginVertical: 20, 
    cursor: "pointer", // เปลี่ยนเคอร์เซอร์เมื่อโฮเวอร์
    width: 304,
    height: 49,
    backgroundColor: "#13714C",
  },

  // *************** Home.js **************** //
  headerTitle: {
    width:"412",
    height:"115",
    backgroundColor: '#fff', 
    shadowColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 20,
  },
  greenwin:{
    marginTop: 50,
    fontWeight: "bold",
    fontSize: 25,
  },
  headerHome: {
    position: "absolute",
    width: "100%",
    height: 299,
    zIndex: 10,
  },
  mainprofile: {
    backgroundColor: "#ffffff70", // สีพื้นหลังขาวใสเล็กน้อย
    borderRadius: 20, // มุมโค้งมน
    padding: 30, // ระยะห่างภายในการ์ด
    marginHorizontal: 26, // ระยะห่างด้านข้างของการ์ด
    flexDirection: "row", // จัดวางเนื้อหาในแนวนอน
    alignItems: "center", // จัดกึ่งกลางในแนวตั้ง
    marginTop: 150, // ระยะห่างด้านบนของการ์ด
    zIndex: 15, // ให้การ์ดอยู่เหนือภาพพื้นหลัง
  },
  avater: {
    width: 64,
    height: 64,
    borderRadius: 32, // ทำให้เป็นวงกลม
    overflow: "hidden", // ซ่อนส่วนที่เกิน
    marginRight: 18,
    zIndex: 20,
  },
  mainservice: {
    position: "absolute",
    marginHorizontal: 45, 
    marginTop: 400,
    zIndex: 20,
    },
  newdropdown: { 
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginTop: 8,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000000ff",
    width: 330,
  },

});
