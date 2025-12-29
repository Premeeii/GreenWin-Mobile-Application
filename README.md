
# สารบัญ
-[Directory Tree](#directory-tree)
-[ขั้นตอนในการติดตั้ง](#%E0%B8%82%E0%B8%B1%E0%B9%89%E0%B8%99%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B9%83%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87)
-[ขั้นตอนในการใช้งาน](#%E0%B8%82%E0%B8%B1%E0%B9%89%E0%B8%99%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B9%83%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%87%E0%B8%B2%E0%B8%99)

# Directory Tree
## Directory Tree for Front-end
```
└── 📁frontend
    └── 📁.expo
    └── 📁assets
        └── account.png
        └── adaptive-icon.png
        └── avatar.png
        └── backg.png
        └── bottom.png
        └── bottomLogin.jpg
        └── close.png
        └── favicon.png
        └── floor.png
        └── GreenWin.png
        └── iconleft.png
        └── logout.png
        └── refresh.png
        └── splash-icon.png
        └── time.png
        └── topAdmin.png
        └── tophome.png
        └── win.png
    └── 📁components
        └── AddPerson.js
        └── AdminMain.js
        └── EditProfile.js
        └── EditRiderProfile.js
        └── FirstPage.js
        └── History.js
        └── ListPerson.js
        └── LoginScreen.js
        └── MainRider.js
        └── Request.js
        └── RequestDetail.js
        └── RiderLogin.js
        └── RiderRegister.js
        └── RiderRegister2.js
        └── RiderSummary.js
    └── 📁styles
        └── mystyle.js
    └── App.js
    └── app.json
    └── index.js
    └── package-lock.json
    └── package.json
```
## Directory Tree for Back-end
```
└── 📁backend
    └── 📁.mvn
        └── maven-wrapper.properties
    └── 📁src
        └── 📁main
            └── 📁java
                └── 📁config
                    └── JwtProperties.java
                    └── JwtUtil.java
                    └── SecurityConfig.java
                    └── WebSocketConfig.java
                └── 📁controllers
                    └── MyController.java
                └── 📁dto
                    └── DataResponse.java
                    └── EditPersonRequest.java
                    └── EditRiderRequest.java
                    └── FindPersonRequest.java
                    └── LoginRequest.java
                    └── RequestResponse.java
                    └── RiderLoginResponse.java
                    └── RiderResponse.java
                    └── SearchRequest.java
                    └── SentLoginDataRequest.java
                    └── SentRiderLoginDataRequest.java
                └── 📁Entity
                    └── History.java
                    └── Location.java
                    └── Person.java
                    └── Request.java
                    └── Rider.java
                    └── RiderLocation.java
                    └── RiderRegister.java
                    └── Summary.java
                └── 📁Repository
                    └── HistoryRepository.java
                    └── LocationRepository.java
                    └── PersonRepository.java
                    └── RequestRepository.java
                    └── RiderLocationRepository.java
                    └── RiderRegisterRepository.java
                    └── RiderRepository.java
                    └── SummaryRepository.java
                └── 📁Service
                    └── CorsConfig.java
                    └── GreenwinApplication.java
            └── 📁resources
                └── 📁META-INF
                └── 📁static
                └── 📁templates
                └── application.properties
        └── 📁test
    └── 📁target
    └── .gitattritbutes
    └── .gitignore
    └── HELP.md               
    └── mvnw
    └── mvnw.cmd
    └── pom.xml
    
```

# ขั้นตอนในการติดตั้ง(แนะนำทดลองบนระบบปฏิบัติการWindow เพื่อลดversionหรือตั้งค่าไม่ตรงกัน)
## การติดตั้งเครื่องมือสำหรับใช้งาน
 - ติดตั้ง node.js โดยผู้พัฒนาใช้version 22.12.0 แต่หาลิ้งค์ดาวน์โหลดไม่ได้แล้ว จึงแนะนำให้ใช้เวอร์ชั่นคือ24.12.0(LTS)
   [Node.js — Download Node.js®](https://nodejs.org/en/download)
   <img width="1897" height="879" alt="image" src="https://github.com/user-attachments/assets/23ef9040-7d5a-4b59-871a-da3a27333ebb" />
 - เมื่อติดตั้งเสร็จ ให้ตรวจสอบ version ของ node และ npm ใน Command Prompt ด้วยคำสั่ง node -v และ npm -v
   <img width="977" height="511" alt="Screenshot 2025-12-15 204945" src="https://github.com/user-attachments/assets/81c2bf45-c642-482e-8809-92725a7a0dc4" />
 - ติดตั้งJava JDK โดยผู้พัฒนาใช้เป็น JDK 17 [Java Downloads | Oracle](https://www.oracle.com/java/technologies/downloads/#java17)
   <img width="1601" height="890" alt="image" src="https://github.com/user-attachments/assets/4de892f6-a345-4839-a6c2-74f4e0050129" />
 - เมื่อติดตั้งเสร็จ ให้ตรวจสอบว่าได้ติดตั้งสำเร็จ และ version ของ JDK โดยคำสั่ง javac -version
   <img width="977" height="514" alt="image" src="https://github.com/user-attachments/assets/7f62044c-53ee-4ba4-868b-09772a087ba1" />
 - ติดตั้ง  Maven Dependencies โดยผู้พัฒนาใช้เป็น version Apache Maven 3.9.9 แต่ทางMavenตอนนี้อัปเดตเป็นversion 3.9.11 ล่าสุด [Download Apache Maven – Maven](https://maven.apache.org/download.cgi)
   <img width="1878" height="898" alt="image" src="https://github.com/user-attachments/assets/3d1c5d86-5e74-4b59-90fd-eed216ada93c" />
 - เมื่อติดตั้งเสร็จให้เพิ่ม Path ของ Maven ไว้ที่ Environment Variable และตรวจสอบว่าติดตั้งสำเร็จที่Command Prompt ด้วยคำสั่ง mvn -v
   <img width="824" height="580" alt="Screenshot 2025-12-15 212706" src="https://github.com/user-attachments/assets/268c94e7-794b-43dc-bf19-6b985f57667b" />
   <img width="972" height="581" alt="image" src="https://github.com/user-attachments/assets/0faa4f3c-569f-4a8d-9f96-dbf63bdc86c5" />
 - ติดตั้ง XAMPP สำหรับเปิด phpMyAdmin เพื่อเปิดฐานข้อมูล mySQL [Download XAMPP](https://www.apachefriends.org/download.html) 
   <img width="498" height="424" alt="image" src="https://github.com/user-attachments/assets/453a0baf-631f-46eb-998c-ab7258d09b21" />
 - ติดตั้ง Android Studio สำหรับใช้เป็น Emulator ในการเปิด demo [ดาวน์โหลด Android Studio และเครื่องมือของแอป - นักพัฒนาแอป Android | Android Developers](https://developer.android.com/studio?hl=th)
   <img width="1912" height="778" alt="image" src="https://github.com/user-attachments/assets/235a26a5-ec78-4fde-bd42-ea92b95067a3" />
 - Clone Repository จาก Git Desktop โดยใช้ URL ของRepositoryนี้
   <img width="1098" height="661" alt="image" src="https://github.com/user-attachments/assets/264c5c90-d26e-44ae-b2ba-b959f41d6409" />
 - เปิดphpMyAdmin ใน XAMPP เพื่อImport ไฟล์ Database ที่อยู่ในfolder ที่Clone Repository มา
   <img width="1652" height="786" alt="image" src="https://github.com/user-attachments/assets/e40bc68d-b03f-42f0-9b40-f065eb6b1c31" />
 - เปิดfolderของโปรเจค บน Visual Studio Code แล้วเปิด Terminal ไปยังfolder frontend แล้วติดตั้ง node_module ด้วยคำสั่ง `npm i`
   <img width="1389" height="472" alt="image" src="https://github.com/user-attachments/assets/1b1ca138-706f-4bad-a895-0d3ade254bb0" />
# ขั้นตอนในการติดตั้งแอปพลิเคชัน
 - เปิดXAMPP สำหรับเปิดรันServer mySQL  แล้วกดAdmin เพื่อไปยังหน้า phpMyAdmin
   <img width="667" height="432" alt="image" src="https://github.com/user-attachments/assets/834380f1-4205-4abb-a8b7-2cd8d1be7f24" />
   <img width="1913" height="899" alt="image" src="https://github.com/user-attachments/assets/b652a152-08f0-4cf1-8c2d-da98e2027a91" />
 - ตรวจสอบ PortของphpMyAdmin เพื่อตั้งค่าในไฟล์application.properties ในโฟลเดอร์backend
   <img width="1682" height="376" alt="image" src="https://github.com/user-attachments/assets/113bb3bc-ea88-4198-a0db-8fb9df06612b" />
 - ไปที่folder backend แล้วเริ่มรันด้วยคำสั่ง `mvn sprin-boot:run`แล้วรอจนกว่าจะCompileเสร็จแล้วได้ดังรูป
   <img width="1854" height="928" alt="image" src="https://github.com/user-attachments/assets/33a79c3e-21b5-4183-93c1-588f52fcc30c" />
 - ไปที่Android Studio แล้วกดMore Action จากนั้นเปิด Virtual Device Manager แล้วกดเพิ่มEmulator สำหรับเปิดแอปพลิเคชัน จำนวน 2 จอ หรือ มากกว่านั้น สำหรับเปิดฝั่งลูกค้า และ วินมอเตอร์ไซค์
   <img width="1216" height="608" alt="image" src="https://github.com/user-attachments/assets/827f0e2b-bd30-4883-b4bf-724626a6b04b" />
 - กดเปิดอย่างน้อย 2 จอ สำหรับฝั่งลูกค้า และ วินมอเตอร์ไซค์ 
   <img width="1766" height="866" alt="image" src="https://github.com/user-attachments/assets/3b5847fa-faa1-4b86-b5f5-3937d49fdd23" />
 - ไปที่ folder frontend แล้วเริ่มรันด้วยคำสั่ง `npm start` รอจนกว่าจะCompileเสร็จ จากนั้น จะขึ้นMenuของExpo จากนั้นให้กด Ctrl + a สำหรับเลือกEmulator ในการเปิดdemo แอปพลิเคชัน แล้วเปิดteminalแยกอีกอัน แล้วทำเช่นกัน สำหรับเปิดอีก Emulatorแล้วเมื่อรอจนเปิดเสร็จจะขึ้นหน้าล็อคอินหลักแอปพลิเคชัน 
   <img width="1860" height="988" alt="image" src="https://github.com/user-attachments/assets/9953e998-14e5-4fcd-af55-400cc3e86541" />
   <img width="1785" height="865" alt="image" src="https://github.com/user-attachments/assets/a8f69cd8-01e2-4481-b062-652be1b6644b" />
# ขั้นตอนการใช้งานฝั่งผู้ใช้งาน
1. การเข้าสู่ระบบผู้ใช้งาน
- ผู้ใช้งานที่มีบัญชีแล้ว ให้กดปุ่มล็อคอิน เพื่อไปยังหน้าล็อคอิน
- จากนั้นกรอกข้อมูล ชื่อผู้ใช้งานและรหัสผ่าน เมื่อกรอกเสร็จให้กดปุ่มล็อคอิน เพื่อเข้าสู่ระบบ
     <p><img width="173" height="382" alt="image" src="https://github.com/user-attachments/assets/d9e5f053-4e9f-4e9d-ae20-5856400708d0" />
        <img width="173" height="382" alt="image" src="https://github.com/user-attachments/assets/f64b6134-2985-4124-a737-3f4f64917cfa" /></p>
        
2. การสมัครบัญชีผู้ใช้งาน
- หากผู้ใช้งานยังไม่มีบัญชี ให้กดปุ่มสมัครบัญชีใช้งาน เพื่อไปยังหน้าสมัครบัญชีใช้งาน
- จากนั้นกรอกข้อมูลที่จำเป็น เช่น ชื่อ–นามสกุล ชื่อผู้ใช้งาน เบอร์โทรและรหัสผ่าน
- กดปุ่ม ยืนยัน เพื่อสร้างบัญชีผู้ใช้งาน
- เมื่อสมัครสำเร็จ ระบบจะพาผู้ใช้งานกลับไปยังหน้าเข้าสู่ระบบ และสามารถทำการเข้าสู่ระบบได้ตามข้อ1
  <p><img width="173" height="382" alt="image" src="https://github.com/user-attachments/assets/c50463e5-74ab-403b-bcc4-f4def3da4c8b" />
     <img width="172" height="382" alt="image" src="https://github.com/user-attachments/assets/b70690ed-29c3-4e87-a6bd-c2562be798c9" />
  <img width="172" height="382" alt="image" src="https://github.com/user-attachments/assets/9afe5410-2a36-4379-a32b-afd11e223b6b" /></p>
  
3. การแก้ไขข้อมูล
- หลังจากเข้าสู่ระบบสำเร็จ ระบบจะแสดง หน้าหลักผู้ใช้งาน
- กดไอคอนแก้ไข เพื่อไปยังหน้าบัญชีผู้ใช้
- ผู้ใช้งานสามารถแก้ไขข้อมูลได้ เช่น ชื่อ-นามสกุล เบอร์โทร จากนั้นกดปุ่มยืนยัน
  <p><img width="173" height="382" alt="image" src="https://github.com/user-attachments/assets/df65f77b-c171-4ddf-8e8e-a12736f5bbf6" /> <img width="172" height="382" alt="image" src="https://github.com/user-attachments/assets/c0ae5091-7a3c-4a99-9667-22fc482e1f66" />
</p>

4. การเรียกใช้บริการวินมอเตอร์ไซค์
- หลังจากเข้าสู่ระบบสำเร็จ ระบบจะแสดง หน้าหลักผู้ใช้งาน
- ผู้ใช้งานเลือก สถานที่ที่ต้องการให้มารับ
- เลือก จุดวินมอเตอร์ไซค์ที่ให้บริการ
- กำหนด จุดหมายปลายทาง
- เมื่อใส่ข้อมูลครบ3ช่องแล้ว กดปุ่มเรียก เพื่อส่งคำขอเรียกรถ
<p>
   <img width="173" height="382" alt="image" src="https://github.com/user-attachments/assets/b0fb4be0-0a2b-462c-8d05-8a168cbcf44e" />
   <img width="173" height="381" alt="image" src="https://github.com/user-attachments/assets/06c5fc6b-b000-4ab2-9de6-2dd1027df1d4" />
   <img width="173" height="382" alt="image" src="https://github.com/user-attachments/assets/dfcd2605-1340-4cb3-959c-423710da216c" />
<img width="172" height="382" alt="image" src="https://github.com/user-attachments/assets/042242b8-40be-465e-9998-4ef531ca6e74" />
</p>

- ระบบจะแสดงหน้าต่างยืนยันการเรียกวิน พร้อมข้อมูลที่ได้กรอกไป เพื่อให้ผู้ใช้งานตรวจสอบ
- ผู้ใช้งานกด ตกลง เพื่อยืนยันการเรียกวิน
- ระบบจะแสดงหน้ากำลังเรียกวิน ขณะนี้ระบบกำลังรอผู้ขับตอบรับคำขอ
- เมื่อผู้ขับตอบรับแล้ว ระบบจะแสดงหน้าวินกำลังมา พร้อมข้อมูลผู้ขับ (ระบบจะแสดงหน้านี้จนกว่าวินจะกดสำเร็จ จากนั้นจะกลับเข้าสู่หน้าหลักผู้ใช้งาน)
  <p>
     <img width="173" height="382" alt="image" src="https://github.com/user-attachments/assets/e17bc5a7-9c68-4c56-a5b1-c68321bd01c0" />
     <img width="173" height="382" alt="image" src="https://github.com/user-attachments/assets/41ce8707-b02a-42d4-bffe-70715a6f1f8e" />
     <img width="172" height="382" alt="image" src="https://github.com/user-attachments/assets/e07bae7e-7369-46af-b6f0-95c07deddc5a" />
  </p>

5. การยกเลิกการเรียกวิน
- เมื่อผู้ใช้งานกดเรียกวินแล้ว หากต้องการยกเลิก สามารถยกเลิกก่อนผู้ขับตอบรับ
- ผู้ใช้งานสามารถกดปุ่ม ยกเลิก
- ระบบจะแสดงหน้าต่างยืนยันการยกเลิก
- เมื่อยืนยัน ระบบจะนำผู้ใช้งานกลับไปยังหน้าหลัก
  <p><img width="173" height="382" alt="image" src="https://github.com/user-attachments/assets/27055e43-6276-43b4-bbd0-f55061225ba0" />
  <img width="173" height="382" alt="image" src="https://github.com/user-attachments/assets/ee5ed795-dd33-410c-a5af-ba1bc930a9ef" />
</p>

6. การดูประวัติ
- ผู้ใช้งานกดไอคอนเวลา ที่หน้าหลักผู้ใช้งาน เพื่อไปยังหน้าประวัติ
- ระบบจะข้อมูลการใช้งานย้อนหลัง
  <p><img width="173" height="382" alt="image" src="https://github.com/user-attachments/assets/a9a04629-d0c3-4b19-b94e-4883fa539842" />
  <img width="173" height="382" alt="image" src="https://github.com/user-attachments/assets/59c43f0e-7776-4395-81df-d559bdea661e" />
</p>

7. การออกจากระบบ
- ผู้ใช้งานกดไอคอนออกจากระบบด้านล่างขวา ในหน้าหลักผู้ใช้งาน เพื่อออกจากระบบ
- ระบบจะแสดงหน้าต่างยืนยันการออกจากระบบ
- เมื่อยืนยัน ระบบจะนำผู้ใช้งานกลับไปยังหน้าเข้าสู่ระบบ
  <p><img width="173" height="382" alt="image" src="https://github.com/user-attachments/assets/8b940c27-559f-41fd-8304-df26243641df" />
  <img width="173" height="382" alt="image" src="https://github.com/user-attachments/assets/1cc85721-5916-489f-a46b-8985557e97df" />
</p>

# ขั้นตอนการใช้งานฝั่งผู้ให้บริการ (วินเขียว)
1. การเข้าสู่ระบบวิน
- สำหรับวินให้กดปุ่ม ใช้งาน ในข้อความด้านล่าง สำหรับวินมอเตอร์ไซค์
- ระบบจะแสดงหน้าล็อคอิน สำหรับวินมอเตอร์ไซค์
- กรอก ชื่อผู้ใช้งานและรหัสผ่าน
- กดปุ่ม ล็อคอิน เพื่อเข้าสู่ระบบ
  <p><img width="173" height="382" alt="image" src="https://github.com/user-attachments/assets/bf657854-d86d-41bc-974e-541f42e617f4" />
  <img width="173" height="382" alt="image" src="https://github.com/user-attachments/assets/6d180a6d-b853-4d36-a0dc-a1e1829d05ec" />
</p>

2. การสมัครเป็นผู้ให้บริการวิน
- หากยังไม่มีบัญชี ให้กดปุ่มสมัคร ในหน้าล็อคอิน สำหรับวินมอเตอร์ไซค์
- กรอกข้อมูลในหน้าสมัครวิน (หน้าแรก) เช่น ชื่อ–นามสกุล เลขทะเบียนรถ และเลขบัตรประชาชน
- กดปุ่ม ถัดไป เพื่อไปยังหน้าสมัครวิน (หน้าสอง) และกรอกข้อมูลเพิ่มเติม
- กดปุ่ม ยืนยัน เพื่อส่งคำร้องสมัครเป็นผู้ให้บริการ
  <p><img width="173" height="382" alt="image" src="https://github.com/user-attachments/assets/5ddbbad4-305c-460b-a41f-8035d1ca4c54" />
  <img width="173" height="382" alt="image" src="https://github.com/user-attachments/assets/130be73c-2331-46ad-be4b-60c8a89de595" />
  <img width="173" height="381" alt="image" src="https://github.com/user-attachments/assets/97ea191f-d829-43fb-bfa1-3a4b9d184784" />
</p>

3. การรับคำร้องจากผู้ใช้งาน
- หลังจากเข้าสู่ระบบ ระบบจะแสดง หน้าหลักผู้ให้บริการ
- เมื่อมีคำร้องจากผู้ใช้งาน ระบบจะแสดงข้อมูลคำร้องในกล่องคำร้อง
- ผู้ให้บริการสามารถกดที่คำร้องเพื่อดูรายละเอียด และกดปุ่ม ตอบรับ เพื่อรับงาน
  <p><img width="173" height="381" alt="image" src="https://github.com/user-attachments/assets/f61b0f80-6216-465b-9a14-b40fdb49b4b9" />
  <img width="173" height="382" alt="image" src="https://github.com/user-attachments/assets/235f2623-dda6-4d09-9127-4c5e9a1e8958" />
  <img width="173" height="382" alt="image" src="https://github.com/user-attachments/assets/0e5858e9-8667-46e2-8027-0a0bbfac0223" />
     <img width="172" height="382" alt="image" src="https://github.com/user-attachments/assets/011e4283-3641-4456-a979-00d5d9476625" />
</p>

4. การให้บริการและจบงาน
- หลังจากรับงาน ระบบจะแสดงหน้ากำลังไปรับ เพื่อให้ผู้ให้บริการ ให้บริการตามคำขอ
- เมื่อรับและส่งผู้ใช้งานถึงจุดหมายเรียบร้อย ให้กดปุ่ม สำเร็จ
- ระบบจะบันทึกสถานะเป็น Success และกลับไปยังหน้าหลักผู้ให้บริการ (จบการบริการ)
  <p><img width="173" height="381" alt="image" src="https://github.com/user-attachments/assets/0afba9f8-a9aa-4b7a-b4a5-d44c1b7f2727" />
</p>

5. การออกจากระบบ
- ผู้ให้บริหารกดไอคอนออกจากระบบด้านล่างขวา ในหน้าหลักผู้ให้บริการ เพื่อออกจากระบบ
- ระบบจะแสดงหน้าต่างยืนยันการออกจากระบบ
- เมื่อยืนยัน ระบบจะนำผู้ให้บริการกลับไปยังหน้าเข้าสู่ระบบ
  <p><img width="173" height="381" alt="image" src="https://github.com/user-attachments/assets/08218eab-b772-449e-819b-3dafab2a2ab9" />
     <img width="172" height="382" alt="image" src="https://github.com/user-attachments/assets/f1a8d252-c69b-4782-b31b-b60789f42a2f" />
  </p>

# ขั้นตอนการใช้งานฝั่งผู้ดูแลระบบ (Admin)
1. การเข้าสู่ระบบผู้ดูแล
- ผู้ดูแลระบบกดปุ่มล็อคอิน เพื่อไปยังหน้าล็อคอิน
- จากนั้นกรอกข้อมูล ชื่อผู้ใช้และรหัสผ่าน เมื่อกรอกเสร็จให้กดปุ่มล็อคอิน เพื่อเข้าสู่ระบบ
  <p><img width="172" height="382" alt="image" src="https://github.com/user-attachments/assets/be5070d5-0a6f-4c1f-9732-041d884d4499" />
  <img width="173" height="382" alt="image" src="https://github.com/user-attachments/assets/5a254939-3e1f-419a-a249-53a061ba4f32" />
</p>

2. การจัดการคำร้องสมัครวิน
- หลังจากเข้าสู่ระบบสำเร็จ ระบบจะแสดง หน้าหลักผู้ดูแลระบบ
- ระบบจะแสดงรายการคำร้องสมัครเป็นผู้ให้บริการวิน เมื่อมีการส่งคำร้องมา ที่กล่องคำร้อง
- ผู้ดูแลสามารถกดที่คำร้องเพื่อดูรายละเอียดทั้งหมด
- ตรวจสอบข้อมูลผู้สมัครอย่างละเอียด
  <p><img width="173" height="382" alt="image" src="https://github.com/user-attachments/assets/27d022fc-5c45-4091-870b-18d04c4a40c4" />
  <img width="173" height="382" alt="image" src="https://github.com/user-attachments/assets/0f49a74f-4ee4-418a-9533-039e9b0ab509" />
  <img width="173" height="382" alt="image" src="https://github.com/user-attachments/assets/af3830a1-6aef-432c-bd57-734ad0ff243e" />
</p>

3. การอนุมัติหรือไม่อนุมัติคำร้อง
- เมื่อผู้ดูแลกดที่คำร้องเพื่อดูรายละเอียดทั้งหมด
- หากข้อมูลถูกต้อง ผู้ดูแลสามารถกดปุ่มอนุมัติ เพื่ออนุมัติคำร้องผู้ให้บริการ
- หากข้อมูลไม่ถูกต้อง  ผู้ดูแลสามารถกดปุ่มไม่อนุมัติ เพื่อปฏิเสธคำร้องผู้ให้บริการ
- ระบบจะอัปเดตสถานะคำร้องตามการตัดสินใจของผู้ดูแล
  <p><img width="173" height="382" alt="image" src="https://github.com/user-attachments/assets/c90f6bc7-8df8-4607-a373-d7137df6967f" />
</p>

4. การออกจากระบบ
- ผู้ดูแลกดไอคอนออกจากระบบด้านล่างขวา ในหน้าหลักผู้ดูแลระบบ เพื่อออกจากระบบ
- ระบบจะแสดงหน้าต่างยืนยันการออกจากระบบ
- เมื่อยืนยัน ระบบจะนำผู้ดูแลกลับไปยังหน้าเข้าสู่ระบบ
 <p><img width="173" height="382" alt="image" src="https://github.com/user-attachments/assets/ffc2c8f5-7309-4eec-99c9-c3b8ae3e4f64" />
    <img width="173" height="382" alt="image" src="https://github.com/user-attachments/assets/e388b98e-2b25-4b86-b6da-389521c9da8d" />
</p>

