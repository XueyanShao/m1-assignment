 //loop for image gallery
      var dogPhotos = []; //empty array to store images
      var fileNames = []; //empty array to store filenames
      var imageList = []; //empty array to store html list that contains an image
      var image; //empty variable to store the assembled image list codes
      var captionList = [
        "Pippi - sweet & mellow",
        "Jack von Jemgo",
        "George von Clooney",
        "Army von Arzberg",
        "Max von Rossow",
        "Cora - sweet & loving",
      ];
      var overlayList = [
        "Female, Adult, Los Angeles",
        "Male, Adult, Los Angeles",
        "Male, Young, Los Angeles",
        "Male, Adult, Los Angeles",
        "Male, Young, Los Angeles",
        "Female, Adult, Los Angeles",
      ];
  //Display popup window when click on images
          var infoList = [
          "Courtesy listing! Please contact Patricia at 323-691-4620 or email patriciadrum@yahoo.com to inquire on Pippy. <br><br>Meet Pippy! She is a 6 year old female Pit Bull who is in need of a new home. Sadly, her owner is having some troubles and can no longer care for her due to personal problems.",
        "Jack von Jemgo is a handsome 5-year-old long-haired German Shepherd. His ideal home would be with family members who are calm and dog-savvy, and until he feels confident that his new family has everything under control, he’ll need someone who will patiently work with his tendency to react to other dogs while on a leash. He needs someone who is home more and would understand that he will experience separation anxiety as he adjusts to a new environment.",
        "George von Clooney is an adorable 12 month old Shepherd mix. In his foster home, George has transformed from an originally shy guy to a personable puppy who wags a friendly hello to both people and other dogs. He delights in playtime and can hardly get enough but, once de-energized, he’s big into cuddle time. Like every pup, George likes to chew on things and he will pull on the leash during walks, but his very experienced foster dad has the patience required to train this boy into a mannerly gentleman. ",
        "Hi, my name is Army, and I’m the longest resident at Westside, but please keep reading, don’t be afraid! I have turned over a new leaf and I just need a certain kind of home. Unfortunately my last homes just had too much chaos for me. I came to Westside with the name Army and it suits me. I like order and structure, otherwise I get nervous. Because I like a calmer home life, I prefer one without kids, cats and small dogs. I have been living with a trainer for the last two weeks, and he and his wife have nothing but good things to say about me.",
        "Max von Rossow is a very handsome 2.5 year old German Shepherd. Max is a bigger boy who has been a happy and fun presence around the rescue. He's affectionate with staff members, and quick to roll onto his back for belly rubs. However, as not uncommon with shepherds, we were told that while he was great with his family, he wasn't always sure of new people in different situations, so we think an adult home without lots of visitors would be best. Max is housebroken and knows some of his commands. ",
        "Mi Corazon is what this beautiful girl's foster mom calls her but she'll answer to Cora, pip squeak, bubba or whatever you'd like to call her! She just loves people and attention, and she'll give you 150% back cuz that's just how she rolls. We don't know much about her past but it was apparent it was a very rough one when she was rescued from the streets of TJ Mexico around March 2019 as she was in pretty bad condition.... BUT look at her now!!! Corazon has left her past behind and now living the life that every dog deserves but now ready for her own forever home.", 
      ];
      var openList = "<li id='dogs'>"; //variable to contain open list
      var closeList = "</li>"; //variable to contain close list
      var openCaption = "<span id='dogcaptions'>";
      var closeCaption = "</span>";
      var openText = "<div id='text'>";
      var closeText = "</div>";
      var openDesc = "<button id='desc' onclick='enablePopup(";
      var openDescClose = ")'>";
      var closeDesc = "</button>";

      
      //Create a loop to create 6 images starting with index of 0
      for (var i = 0; i < 6; i++) {
        fileNames.push("dog" + (i + 1)); //generate filenames
        dogPhotos.push(
          "<img src='gallery/" +
            fileNames[i] +
            ".jpeg' alt='Cute Dog Photo " +
            (i + 1) + 
            "'>"
        ); //assemble full image element
        image =
          openList +
          dogPhotos[i] +
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
      document.getElementById("dogimages").innerHTML = imageList.join(" ");

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
      $("#dogs img").click(function() {
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