// import React from 'react';
// import Register from './Register';

// function EditMyTravel() {
//   return (
//     <Register />
//   );
// }

//   const [travellerImage , setTravellerImage]  = useState('')
//   const [travellerFullname , setTravellerFullname]  = useState('')
//   const [travellerEmail , setTravellerEmail]  = useState('')
//   const [travellerPassword , setTravellerPassword]  = useState('')

//   const handleSelectFileClick = (e) =>{
//     const file = e.target.files[0]

//     if(file){
//       setTravellerImage(file)
//     }
//   }

//   const handleRegisterClick = async (e) =>{
//     e.preventDefault();

//     //Validate UI แล้วค่อยส่งข้อมูลไปให้ API ทีฝั่ง Back-end
//     if( travellerFullname.trim().length == 0){
//       alert('ป้อนชื่อ-นามสกุลด้วย')
//     }else if( travellerEmail.trim().length == 0){
//       alert('ป้อนอีเมล์ด้วย')
//     }else if( travellerPassword.trim().length == 0){
//       alert('ป้อนรหัสผ่านด้วย')
//     }else if( travellerImage == null){
//       alert('เลือกรูปด้วย')
//     }else{
//       //ส่งข้อมูลไปให้ API บันทึงลง DB แล้ว redirect ไปหน้า Login
//       const formData = new FormData();

//       formData.append("travellerFullname", travellerFullname);
//       formData.append("travellerEmail", travellerEmail);
//       formData.append("travellerPassword", travellerPassword);

//       if (travellerImage) {
//         formData.append("travellerImage", travellerImage);
//       }
//       //ส่งข้อมูลไปให้ API (https://localhost:4000/traveller/) บันทึงลง DB
//       try {
//         const response = await fetch("http://localhost:4000/traveller/", {
//           method: "Post",
//           body: formData,
//         });
//         if (response.status == 201) {
//           alert("ลงทะเบียนสําเร็จ");
//           nevigator('/')
//           // window.location.href = '/';

//         } else {
//           alert("ลงทะเบียนไม่สําเร็จ กรุณาลองใหม่อีกครั้ง");

//         }
//       } catch (error) {
//         alert("พบข้อผิดพลาด", error);
//       }
//     }    
//   }

//   const SelectFileBt = styled("input")({
//     clip: "rect(0 0 0 0)",
//     clipPath: "inset(50%)",
//     height: 1,
//     overflow: "hidden",
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     whiteSpace: "nowrap",
//     width: 1,
//   })

//   return (
//     <Box sx={{ width: '100%' }} >
//       <Box sx={{ width: '60%', boxShadow: 4, mx: 'auto', p: 5, my:4 }}>
//         <Typography variant='h3' sx={{ textAlign: 'center', fontWeight: 'bold' }}>
//           Travel DTI
//         </Typography>
//         <Avatar src={Travel} alt="travel logo"
//           sx={{ width: 150, height: 150, mx: 'auto', my: 2 }} />
//         <Typography variant='h5' sx={{ textAlign: 'center', fontWeight: 'bold' }}>
//           ลงทะเบียน
//         </Typography>
//         <Typography sx={{ fontWeight: 'bold', mt: 4, mb: 1 }} >
//           ชื่อ-นามสกุล
//         </Typography>
//         <TextField fullWidth value={travellerFullname} onChange={(e)=>setTravellerFullname(e.target.value)} />
//         <Typography sx={{ fontWeight: 'bold', mt: 4, mb: 1 }} >
//           ชื่อผู้ใช้ (E-Mail)
//         </Typography>
//         <TextField fullWidth  value={travellerEmail} onChange={(e)=>setTravellerEmail(e.target.value)}/>
//         <Typography sx={{ fontWeight: 'bold', mt: 2, mb: 1 }} >
//           รหัสผ่าน
//         </Typography>
//         <TextField fullWidth type='password'  value={travellerPassword} onChange={(e)=>setTravellerPassword(e.target.value)}/>

//         <Avatar src={travellerImage == null ? Profile : URL.createObjectURL(travellerImage) } alt="travel logo"
//                 sx={{ width: 150, height: 150, mx: 'auto', my: 3 }} variant="rounded"/>

//         <Box sx={{display: 'flex', justifyContent: 'center'}}>
//           <Button component="label" variant='contained' 
//                   startIcon={<CloudUploadIcon />}>
//             เลือกรูป
//             <SelectFileBt type="file" accept="image/*" onChange={handleSelectFileClick}/>
//           </Button>
//         </Box>

//         <Button variant="contained" fullWidth
//           sx={{ mt: 4, py: 2, backgroundColor: '#259e69' }}  onClick={handleRegisterClick}>
//           ลงทะเบียน
//         </Button>

//         <Link to='/' style={{ textDecoration: 'none', color: '#259e69' }}>
//           <Typography sx={{ fontWeight: 'bold', mt: 2, mb: 1, textAlign: 'center' }} >
//             กลับไปหน้า LOGIN
//           </Typography>
//         </Link>
//       </Box>
//     </Box>
//   ) 
//     // try {
//     //   const response = await fetch("http://localhost:4000/traveller/", {
//     //     method: "PUT",
//     //     body: formData,
//     //   });
//     //   if (response.status == 201) {
//     //     alert("ลงทะเบียนสําเร็จ");
//     //     nevigator('/')
//     //     // window.location.href = '/';

//     //   } else {
//     //     alert("ลงทะเบียนไม่สําเร็จ กรุณาลองใหม่อีกครั้ง");

//     //   }
//     // } catch (error) {
//     //   alert("พบข้อผิดพลาด", error);
//     // }
  

// export default EditMyTravel