var ringData_1=[
    {
        head:"10% OFF ON DIAMOND PRICE",
        image:"https://kinclimg3.bluestone.com/f_webp,c_scale,w_515,b_rgb:f0f0f0/giproduct/BIPO0716R05_RAA18XXXXXXXXXXXX_ABCD00-PICS-00001-1024-52078.png",
        price:"8,824",
        strikedoffPrice:"9,050",
        p:"Save",
        savePrice:"226"
    },
    {
        head:"10% OFF ON MAKING CHARGE",
        image:"https://kinclimg4.bluestone.com/f_webp,c_scale,w_515,b_rgb:f0f0f0/giproduct/BISP0628R02_YAA18SYRUXXXXXXXX_ABCD00-PICS-00001-1024-47108.png",
        price:"9,473",
        strikedoffPrice:"9,699",
        p:"Save",
        savePrice:"226"
    },
    {
        head:"10% OFF ON MAKING CHARGE",
        image:"https://kinclimg3.bluestone.com/f_webp,c_scale,w_515,b_rgb:f0f0f0/giproduct/BIJP0630R213_YAA22XXXXXXXXXXXX_ABCD00-PICS-00001-1024-50615.png",
        price:"9,118",
        strikedoffPrice:"9,344",
        p:"Save",
        savePrice:"226"
    },
    {
        head:"10% OFF",
        image:"	https://kinclimg0.bluestone.com/f_webp,c_scale,w_515,b_rgb:f0f0f0/giproduct/BIPO0716R29_YAA18XXXXXXXXXXXX_ABCD00-PICS-00001-1024-52256.png",
        price:"9,175",
        strikedoffPrice:"9,900",
        p:"Save",
        savePrice:"226"
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

    var buttons=document.createElement("div")
    buttons.setAttribute("class","buttons");
          
    var btn1 = document.createElement("button");     
    btn1.innerHTML = "TRY AT HOME FOR FREE";
    btn1.setAttribute("class","btn1");

    btn1.addEventListener("click", function () {
       alert("go to popup");
     });

    var btn2 = document.createElement("button");
    btn2.innerHTML = "VIEW DETAILS >>";
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