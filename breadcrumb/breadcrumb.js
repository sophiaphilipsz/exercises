document.querySelector("button").addEventListener("click", addBreadcrumbToPage);
const bc = [{ name: "Hvidevarer / ", link: "/hvidevarer" },
    { name: "Vaskemaskiner / ", link: "/hvidevarer/vaskemaskiner" },
    { name: "Bosch ", link: "/hvidevarer/vaskemaskiner/bosch/" },];




function addBreadcrumbToPage() {
   // console.log("Tilføj brødkrumme");
    document.querySelector("ul").innerHTML = generateBreadcrumbPath();
    }

    
    function generateBreadcrumbPath() {
        let returnString = "";
        console.log("længden af bc arrayet",bc.length);
        bc.forEach((obj,i)=>{
             console.log("i",i)

             if (i !== bc.length-1){
                 console.log ("det er ikke sidste element")
                 returnString += `<a href="${obj.link}">${obj.name}</a>`;
                }else{
                console.log ("det er sidste element")
                returnString += `${obj.name}`;
                
             }
                //returnString = returnString+obj.name
        });
        return returnString;
     }    
     console.log(generateBreadcrumbPath());

