//loop for image gallery
      var catPhotos = []; //empty array to store images
      var fileNames = []; //empty array to store filenames
      var imageList = []; //empty array to store html list that contains an image
      var image; //empty variable to store the assembled image list codes
      var captionList = [
        "Luke & Bo",
        "Smoky & Callie",
        "Fox & Pom Pom",
        "Felix & Freddie",
        "Brulee & Mousse",
        "Matty & Stella",
      ];
      var overlayList = [
        "Male, Adult, Los Angeles",
        "Female, Adult, Los Angeles",
        "Male, Young, Los Angeles",
        "Male, Young, Los Angeles",
        "Male, Kitten, Los Angeles",
        "Male, Kitten, Los Angeles",
      ];
      //Display popup window when click on images
      var infoList = [
        "Smoky and Callie are sisters and a dynamic duo!! Sweet and playful Callie (Calico) is very spunky, more inclined to be playing than cuddling. Smoky, is both playful and cuddly. They absolutely love each other, and we'd hate to split them up. <br><br>If you're ready to become a paw parent to this awesome duo, please head to SaveKittensLA.org & send us an adoption application! We do very high volume spay/neuter, but we take an extremely personalized approach to all the babies we rescue. ",
        "Hi! I'm Felix, and I'm ready to be adopted with my brother Freddie. I love to have my neck and head scratched most of all, when I ask for pets. I love to play and I'm very adventurous! I love to bounce around in the tub with my brother- we like the sounds we can make! Sometimes if you startle me I might hiss, but I don't mean it! I like a calm home - I'm a bit shy and I'll need time to warm up. Snacks help!",
        "Mousse and Brulee are two bonded brothers and very different kittens! These siblings are learning how to be cats and coming along nicely. Mousse, the black kitten, is outgoing, goofy, playful and silly. He willingly head butts for attention, and has “Insta-purr” when he feels safe. He's usually the first to come up and say hello.<br><br>Both kittens are typical toy loving, paper ball batting, climbing powerhouses that love to showcase their skills. Are you their next play date?",
        "Matty (gray) is a little bro, he loves playing, enjoys lots of rubs, and is always ready to say 'hey!' He's got the cutest all-gray monochrome face and body, and he's a hungry munchkin. His foster thinks he will grow up to be a big, fun dude!<br><br>Stella is a lil lover. She's definitely smaller than Matty, but holds her own. She is a super-purrer, and the two of them love to pile on each other for naps on laps. She also loves to play and has the most beautiful tabby face - she's a total model.",
        "This cat is looking for a new foster. Sophie was originally trapped for TNR. She is a small, semi-feral cat, approximately 2 yrs, 8.5 lbs, Silver Tabby, healthy (her combo/snap test was negative). Here are notes from her foster mom who can no longer keep her due to construction in the home: “Sophie waits and meets me at the hallway door when I arrive with her meals. She greets me with a few meows and usually a little hiss because she’s still wary. After she eats she hangs out within a couple feet of me, cleaning herself, stretching, using her scratcher, and sitting on her little rug by the door while I’m with her.",
        "Misty is a special tripod, even though it might initially feel sad to think she only has 3 legs, she is just a little love and so full of life! She loves to greet people at the door and immediately needs to be picked up and get some under the chin pets.<br><br>She really enjoys sitting at the top of the cat tree and watching everyone and everything from 'her spot'. BUT she also likes giving you a little meow when you walk by to let you know she's ready for cuddles.",
      ]
      var openList = "<li id='cats'>"; //variable to contain open list
      var closeList = "</li>"; //variable to contain close list
      var openCaption = "<span id='catcaptions'>";
      var closeCaption = "</span>";
      var openText = "<div id='text'>";
      var closeText = "</div>";
      var openDesc = "<button id='desc' onclick='enablePopup(";
      var openDescClose = ")'>";
      var closeDesc = "</button>";

      //Create a loop to create 6 images starting with index of 0
      for (var i = 0; i < 6; i++) {
        fileNames.push("cat" + (i + 1)); //generate filenames
        catPhotos.push(
          "<img src='gallery/" +
            fileNames[i] +
            ".jpeg' alt='Cute Cat Photo " +
            (i + 1) +
            "'>"
        ); //assemble full image element
        image =
         openList +
          catPhotos[i] +
          openCaption +
          captionList[i] + 
          closeCaption +
          openText +
          openDesc + i + openDescClose + overlayList[i] + closeDesc +
          closeText +
          closeList; //assemble the entire image lists and store in variable
        imageList.push(image); //store the image
      }
      //Display all six images from the array in the album
      document.getElementById("catimages").innerHTML = imageList.join(" ");

      function enablePopup(i) {
        document.getElementById("popupwindow").style.visibility = "visible";
        document.getElementById("title").innerHTML=captionList[i];
         document.getElementById("info").innerHTML=infoList[i];
      }
 
      var closeInfo = document.getElementById("closebox");
      closeInfo.addEventListener("click",hideInfo);
      function hideInfo() {
          document.getElementById("popupwindow").style.visibility = "hidden";
      }
      //jQuery to show lightbox
$(document).ready(function(){
      $("#cats img").click(function() {
        var img = $(this).clone();
        $(this).css("cursor","pointer");
        $("#backdrop").animate({"opacity":".50"},300,"linear").css("display","block");
        $("#lightbox").fadeIn(); 
        $("#lightbox").append(img);
      }) 
      /* Click to close lightbox */
    $('#close, #backdrop').click(function(){
        $('#backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('#backdrop').css('display', 'none');
        });
        $('#lightbox').fadeOut();
        $("#lightbox").contents().remove("img");
    });
  })