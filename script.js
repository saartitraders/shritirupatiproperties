function sendWhatsApp(e){
 e.preventDefault();
 const name=document.getElementById("name").value;
 const phone=document.getElementById("phone").value;
 const type=document.getElementById("type").value;
 const msg=document.getElementById("msg").value;
 const text=`Hello Shri Tirupati Properties,%0A%0AName: ${encodeURIComponent(name)}%0AMobile: ${encodeURIComponent(phone)}%0AInterested in: ${encodeURIComponent(type)}%0ARequirement: ${encodeURIComponent(msg)}`;
 window.open(`https://wa.me/918130966987?text=${text}`,"_blank");
}