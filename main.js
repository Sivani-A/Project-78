var nam=["Father","Mother", "Brother","Me"];
var photo=["https://img.pngio.com/father-png-86-images-in-collection-page-1-father-png-400_750.png", "https://freepngimg.com/thumb/mothers_day/36359-8-mother-transparent-picture.png",
 "https://img.favpng.com/18/18/12/the-boss-baby-brother-dreamworks-animation-film-png-favpng-zaRYKfpFLXkrYXpEWA020irjh.jpg",
"Family Book_files"]

var i=0;

function BtnNext(){
    document.getElementById("Img").src=photo[i];
    document.getElementById("parah").innerHTML=nam[i];
    i++;
    if (i==3){
        i=0;
    }

}
