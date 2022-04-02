var ringData_1=[
    {
        head:"25% OFF ON DIAMOND PRICE",
        image:"https://kinclimg0.bluestone.com/f_webp,c_scale,w_515,b_rgb:f0f0f0/giproduct/BVUN0180S21_WAA18SOG60025XXXX_ABCD00-PICS-00004-1024-10841.png",
        price:"50,002",
        strikedoffPrice:"54,802",
        p:"Save",
        savePrice:"4,800"
    },
    {
        head:"10% OFF ON MAKING CHARGE",
        image:"https://kinclimg0.bluestone.com/f_webp,c_scale,w_515,b_rgb:f0f0f0/giproduct/BVUN0180S27_WAA18SOG60015XXXX_ABCD00-PICS-00004-1024-33610.png",
        price:"23929",
        strikedoffPrice:"24,416",
        p:"Save",
        savePrice:"487"
    },
    {
        head:"20% OFF ON MAKING CHARGE",
        image:"https://kinclimg5.bluestone.com/f_webp,c_scale,w_515,b_rgb:f0f0f0/giproduct/BVUN0180H13_WAA18DIG6SOG60020_ABCD00-PICS-00004-1024-33611.png",
        price:"41,961",
        strikedoffPrice:"45,346",
        p:"Save",
        savePrice:"3,385"
    },
    {
        head:"20% OFF",
        image:"	https://kinclimg3.bluestone.com/f_webp,c_scale,w_515,b_rgb:f0f0f0/giproduct/BVUN0180S22_YAA18SOG60030XXXX_ABCD00-PICS-00004-1024-51176.png",
        price:"43577",
        strikedoffPrice:"54472",
        p:"Save",
        savePrice:"10,895"
    },
    {
        head:"20% OFF",
        image:"https://kinclimg3.bluestone.com/f_webp,c_scale,w_515,b_rgb:f0f0f0/giproduct/BISM0180H84_YAA18DIG6SOG60025_ABCD00-PICS-00004-1024-20418.png",
        price:"86,983",
        strikedoffPrice:"1,08,729",
        p:"Save",
        savePrice:"21,746"
    },
    {
        head:"20% OFF",
        image:"https://kinclimg1.bluestone.com/f_webp,c_scale,w_515,b_rgb:f0f0f0/giproduct/BIPM0180E80_WAA18SOG60025XXXX_ABCD00-PICS-00004-1024-7875.png",
        price:"47,760",
        strikedoffPrice:"59,701",
        p:"Save",
        savePrice:"11,941"
    },
    {
        head:"25% OFF ON DIAMOND PRICE",
        image:"	https://kinclimg4.bluestone.com/f_webp,c_scale,w_515,b_rgb:f0f0f0/giproduct/BVUN0180S16_WAA18DIG6SOG60030_ABCD00-PICS-00004-1024-51174.png",
        price:"30,517",
        strikedoffPrice:"38,147",
        p:"Save",
        savePrice:"7,630"
    },
    {   
        head:"20% OFF ON MAKING CHARGE",
        image:"https://kinclimg7.bluestone.com/f_webp,c_scale,w_515,b_rgb:f0f0f0/giproduct/BVUN0180S23_WAA18DIG6SOG60030_ABCD00-PICS-00004-1024-51212.png",
        price:"27,876",
        strikedoffPrice:"34,845",
        p:"Save",
        savePrice:"6,969"
    },
    {
        head:"20% OFF",
        image:"https://kinclimg7.bluestone.com/f_webp,c_scale,w_515,b_rgb:f0f0f0/giproduct/BVUN0180S40_WAA18DIG6SOG60030_ABCD00-PICS-00004-1024-51165.png",
        price:"70,619",
        strikedoffPrice:"80,092",
        p:"Save",
        savePrice:"9,473"
    },
    {   
        head:"20% OFF",
        image:"https://kinclimg6.bluestone.com/f_webp,c_scale,w_515,b_rgb:f0f0f0/giproduct/BIVT0180E61_WAA18DIG6SOG60050_ABCD00-PICS-00004-1024-51185.png",
        price:"44,268",
        strikedoffPrice:"49,119",
        p:"Save",
        savePrice:"4,851"
    },
    

];

    
console.log(ringData_1);

var ringDetails=JSON.parse(localStorage.getItem("viewData")) || [];

ringData_1.map(function(elem){
    var box = document.createElement("div");
    box.setAttribute("class","box");
    

    var Headdiv = document.createElement("div");
    Headdiv.innerText = elem.head;
    Headdiv.setAttribute("class","Headdiv")

    var img = document.createElement("img");
    img.src = elem.image;
    img.setAttribute("class","image");

    var bigDiv =  document.createElement("div");
    bigDiv.setAttribute("class","bigDiv");

    var priceDiv = document.createElement("div");
    priceDiv.setAttribute("class","priceDiv");

    var ringPrice = document.createElement("p") ;
    ringPrice.innerText = `₹`+ elem.price;
    ringPrice.setAttribute("class","ringPrice");

    var strk = document.createElement("p");
    strk.innerText = `₹`+ elem.strikedoffPrice;
    strk.setAttribute("class","strk");

    priceDiv.append(ringPrice,strk);

    var rightDiv = document.createElement("div");
    rightDiv.setAttribute("class","priceDiv")

    var P = document.createElement("p");
    P.innerText = elem.p
    P.setAttribute("class","P");

    var saved = document.createElement("p");
    saved.innerText = `₹`+ elem.savePrice;
    saved.setAttribute("class","saved");

    var buttons = document.createElement("div");
    buttons.setAttribute("class","buttons");

    var btn1 = document.createElement("button");
    btn1.innerText = "TRY AT HOME FOR FREE";
    btn1.setAttribute("class","btn1");
    btn1.addEventListener("click", callfun);
    function callfun(){
        document.querySelector("#model").classList.add("active");
    }
   
    document.querySelector("#bttns").addEventListener("click",removefun)
      function removefun(){
      document.querySelector("#model").classList.remove("active");
      }
    document.querySelector(".closebtn").addEventListener("click",closePopup);
      function closePopup(){
       document.querySelector("#model").classList.remove("active"); 
       }

    var btn2 = document.createElement("button");
    btn2.innerText = "VIEW DETAILS >>";
    btn2.setAttribute("class","btn2")
    btn2.addEventListener("click", function () {
        viewDetails(elem);
        
    });

    buttons.append(btn1,btn2);

    rightDiv.append(P,saved);

    bigDiv.append(priceDiv,rightDiv);

    box.append(Headdiv,img,buttons,bigDiv);

    document.querySelector("#id1").append(box);

    function viewDetails(elem){
        ringDetails.push(elem);
        window.location.href="nextpage.html"
        localStorage.setItem("viewData",JSON.stringify(ringDetails));
     }
    
});