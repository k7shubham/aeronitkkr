var finalYear = {
   "Sharique": {
    "Branch":"ECE",
    "Post":"President",
    "Email":"md_11915095@nitkkr.ac.in",
    "Image":"./members/Sharique.jpg"
  },
    "Anubhav Saini": {
    "Branch":"Mechanical",
    "Post":"Vice-President",
    "Email":"anubhav_11916031@nitkkr.ac.in",
    "Image":"./members/Anubhav.jpg"
  },
    "Abhronil Adhikari": {
    "Branch":"ECE",
    "Post":"Secretary",
    "Email":"abhronil_11915097@nitkkr.ac.in",
    "Image":"./members/Abhronil.jpg"
  },
    "Snehil Raj": {
    "Branch":"Electrical",
    "Post":"Secretary",
    "Email" : "snehil_11914038@nitkkr.ac.in",
    "Image":"./members/Snehil.jpg"
    },

    "Tarun Yadav": {
    "Branch":"Mechanical",
    "Post":"Secretary",
    "Email" : "tarun_11916023@nitkkr.ac.in",
    "Image":"./members/Tarun.jpg"
    },

    "Shikhar Singh": {
    "Branch":"ECE",
    "Post":"Member",
    "Image":"./members/Shikhar.jpg"
    },

    "Madhur": {
	  "Branch":"Mechanical",
    "Post":"Member",
    "Image":"./members/Madhur.jpg"
    },

    "Varun Goel": {
	  "Branch":"Mechanical",
    "Post":"Member",
    "Image":"./members/Varun.jpg"
    },  
 };
    
 

 var preFinalYear = {

 	"Bhupeksh": {
  "Image":"./members/Bhupeksh.jpg"
	},

  "D Sharvani": {
  "Image":"./members/Sharvani.jpg"
  },

  "Shubham Kaushik": {
  "Image":"./members/Shubham.jpg"
  },

  "Atul": {
    "Image":"./members/Atul.jpeg"
    },
  
  "Himanshu": {
  "Image":"./members/Himanshu.jpeg"
  },
  
  "Priyanshu": {
  "Image":"./members/Priyanshu.jpeg"
  },
  
  "Tanuj": {
  "Image":"./members/Tanuj.jpeg"
  },
  
  "Rohit": {
  "Image":"./members/Rohit.jpeg"
            },
  
  "Khushi": {
  "Image":"./members/Khushi.jpeg"
              },
  
  "Nitin": {
  "Image":"./members/Nitin.jpeg"
    },

  "Chanakya Dheeraj": {
    "Image":"./members/Chanakya.jpg"
  },

  "Saurav Singh": {
  "Image":"./members/Saurav.jpg"
  },

  "Rahul Yadav": {
  "Image":"./members/Rahul.jpg"
  },


 };


 

 // console.log(preFinalYear);
 // console.log(finalYear);

function makeCard(name,Branch,Email,link,image,post=""){

      var isPost = '';
      if(post!="")
           isPost+='Post: '+post+'</br>'

      var str =  '<div class="col s12 m6 l4">'+
                    '<div class="card">'+
                      '<div class="card-image">'+
                            '<img src="'+image+'">'+
                            '<span class="card-title">'+name+'</span>'+
          '</div>'+
	  '<div class="card-content">'+
                          '<p>'+isPost+'Branch: '+Branch+'</p>'+
                      '</div>'+
                    '</div></div>'
      //console.log(name,Branch,Email,link,image,post)
        
      return str;
 }


function makeCard2(name,image){

      var str = '<div class="col s12 m6 l4">'+
                    '<div class="card">'+
                      '<div class="card-image">'+
                            '<img src="'+image+'">'+
                            '<span class="card-title" style = "text-align: center">'+name+'</span>'+
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
            var card = makeCard2(name,preFinalYear[name]["Image"]);
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
