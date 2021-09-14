var a = 10;
switch (a) {
  case 2:
    console.log(a * 2);
    break;

  case 5:
    console.log(a * 5);
    break;

  case 7:
    console.log(a * 7);
    break;

  case 10:
    console.log(a * 10);
    break;

  default:
    console.log(a);
}

if (a == 2) {
  console.log(a * 2);
} else if (a == 5) {
  console.log(a * 5);
} else if (a == 7) {
  console.log(a * 7);
} else if (a == 10) {
  console.log(a * 10);
} else {
  console.log(a);
}

// -----------------------3------------------------
// אם המספר מתחלק ב-2  הדפס המספר כפול 2
// אם המספר מתחלק ב-5  הדפס המספר כפול 6
// אחרת הדפס "not found"

var num = 15;
switch (num % 2) {
  case 0:
    console.log(num * 2);
    break;
}
switch (num % 5) {
  case 0:
    console.log(num * 6);
    break;
  default:
    console.log("not found");
}

if (num % 2 == 0) {
  console.log(num * 2);
} else if (num % 6 == 0) {
  console.log(num * 6);
} else {
  console.log("not found");
}

// בדוק מקרים בהם המספר הוא מ 1-7 בכל מקרה הדפס את היום המתאים לו
var numDay = 6;
switch (numDay) {
  case 1:
    console.log("Sunday");
    break;

  case 2:
    console.log("Monday");
    break;

  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("just 7 days in the week");
}
var obj = { name: "keren", email: "keren4509@gmail.com", sog: "admin" };
switch (obj.sog) {
  case "admin":
    console.log("you are admin");
    break;
  case "super admin":
    console.log("you are super admin");
    break;
  default:
    console.log("you are our loyal client");
    break;
}

// צור 5 כפתורים עם שמות של פירות:
// בלחיצה על כל אחד מהם הפעל את אותה פונקציה(שאתם יוצרים) המדפיסה איזה פרי נלחץ

PeachBtn.onclick = () => {
  fruit("peach");
};
orangeBtn.onclick = () => {
  fruit("orange");
};
watermelonBtn.onclick = () => {
  fruit("watermelon");
};
lemonBtn.onclick = () => {
  fruit("lemon");
};
appleBtn.onclick = () => {
  fruit("apple");
};
function fruit(type) {
  switch (type) {
    case "peach":
      console.log(PeachBtn.innerText);
      break;
    case "orange":
      console.log("orange");
      // console.log(orangeBtn.innerText);
      break;
    case "watermelon":
      console.log("watermelon");
      break;
    case "lemon":
      console.log("lemon");
      break;
    default:
      console.log("apple");
      break;
  }
}
// תון מערך של 5 רכבים: דגם, שנתון, מחיר, הנחה(כמה אחוז), תמונה(קישור
var fiveCar=[{degam:"aaa",year:"2001",price:"100",img:"https://pixabay.com/photos/beach-sea-footprints-sand-6292382/",Discount:10},
{degam:"aaa",year:"2001",price:"1200",img:"https://pixabay.com/photos/beach-sea-footprints-sand-6292382/",Discount:20},
{degam:"aaa",year:"2100",price:"1500",img:"https://pixabay.com/photos/beach-sea-footprints-sand-6292382/",Discount:30},
{degam:"aaa",year:"2011",price:"1080",img:"https://pixabay.com/photos/beach-sea-footprints-sand-6292382/",Discount:40},
{degam:"aaa",year:"2021",price:"1005",img:"https://pixabay.com/photos/beach-sea-footprints-sand-6292382/",Discount:50}]
for (let i = 0; i < fiveCar.length; i++) {
    document.write(`degam:${fiveCar[i].degam}<br>
    year: ${fiveCar[i].year}<br>
    price after Discount: ${fiveCar[i].price-(fiveCar[i].price*fiveCar[i].Discount)}<br>
    img: <img src="${fiveCar[i].img}"><br>`)
    // document.write(fiveCar[i].price.sort() )
switch(fiveCar[i].Discount){
    case 25:
        alert("crazy sel")
        break;
        case 10:
        alert("good deal for you")
        break;
        case 7:
        alert("not bad")
        break;
        case 3:
        alert("this is joke")
        break;
}
}
