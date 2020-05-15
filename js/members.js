var finalYear = {
   "Nachiket Sharma": {
    "Branch":"Electrical",
    "Post":"President",
    "Email":"Nachiket97Sharma@gmail.com",
    "Link":"",
    "Image":"./members/template.jpg"
  },
    "Shivam Kumar": {
    "Branch":"Mechanical",
    "Post":"Secretary",
    "Email":"shivamkdv1998@gmail.com",
    "Link":"",
    "Image":"./members/template.jpg"
  },
    "Swikriti Kumari": {
    "Branch":"Mechanical",
    "Post":"Vice President",
    "Email":"",
    "Link":"",
    "Image":"./members/template.jpg"
  },
    "Sumit Saini": {
    "Branch":"Mechanical",
    "Post":"Secretary",
    "Email":"",
    "Link":"",
    "Image":"./members/template.jpg"
  }
    
 };

 var preFinalYear = {
 	"Amit Jangra": {
    "Branch":"ECE",
    "Email":"amitjangraa1999@gmail.com",
    "Link":"",
    "Image":"./members/template.jpg"
  },
  "Amit Kumar": {
    "Branch":"ECE",
    "Email":"amit_11710423@nitkkr.ac.in",
    "Link":"",
    "Image":"./members/template.jpg"
  },
   "Lakshay Kumar": {
    "Branch":"ECE",
    "Email":"Lakshayk67@gmail.com",
    "Link":"",
    "Image":"./members/template.jpg"
  },
  "Saurabh Shukla": {
    "Branch":"Mechanical",
    "Email":"shuklasaurabh67@gmail.com",
    "Link":"",
    "Image":"./members/template.jpg"
  },
  "Satyam Sihare": {
    "Branch":"IT",
    "Email":"",
    "Link":"",
    "Image":"./members/template.jpg"
  }
 };

 

 // console.log(preFinalYear);
 // console.log(finalYear);

function makeCard(name,Branch,Email,link,image,post='null'){

      var isPost = '';
      if(post!='null')
           isPost+='Post: '+post+'</br>'

      var str = '<div class="col s12 m3">'+
                    '<div class="card">'+
                      '<div class="card-image">'+
                            '<img src="'+image+'">'+
                            '<span class="card-title">'+name+'</span>'+
                      '</div>'+
                      '<div class="card-content">'+
                          '<p>'+isPost+'Email: '+Email+'</br>Branch: '+Branch+'</p>'+
                      '</div>'+
                    '<div class="card-action">'+
                       '<a href="'+link+'">Link</a>'+
                    '</div></div></div>'
      //console.log(name,Branch,Email,link,image,post)
        
      return str;
 }

function Cards(finalYear,preFinalYear)
{
       var parent1  = document.getElementsByClassName("final-year")[0];
       var parent2 = document.getElementsByClassName("pre-final-year")[0];
       var allCards1 = parent1.innerHTML;
       var allCards2 = parent2.innerHTML;
       var keys1 = Object.keys(finalYear);
       var keys2 = Object.keys(preFinalYear);
       //console.log(parent1);
       for( i in keys1)
       {
              var name = keys1[i];
              //console.log(finalYear[name]);
              var card = makeCard(name,finalYear[name]["Branch"],finalYear[name]["Email"],
                finalYear[name]["Link"],finalYear[name]["Image"],finalYear[name]["Post"]);
              allCards1+=card;
       }

       for(i in keys2)
       {
            var name = keys2[i];
            var card = makeCard(name,preFinalYear[name]["Branch"],preFinalYear[name]["Email"],
              preFinalYear[name]["Link"],preFinalYear[name]["Image"]);
            allCards2+=card;
       }

      parent1.innerHTML=allCards1;
      parent2.innerHTML=allCards2;
}

Cards(finalYear,preFinalYear)


/*
 <div class="col s12 m3">
          <div class="card">
            <div class="card-image">
              <img src="background1.jpg">
              <span class="card-title">Card Title</span>
            </div>
            <div class="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
*/