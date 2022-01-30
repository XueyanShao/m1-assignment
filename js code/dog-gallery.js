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
        "Text Here",
        "Text Here",
        "Text Here",
        "Text Here",
        "Text Here", 
      ];
      var openList = "<li id='dogs'>"; //variable to contain open list
      var closeList = "</li>"; //variable to contain close list
      var openCaption = "<span id='dogcaptions'>";
      var closeCaption = "</span>";
      var openOverlay = "<div id='overlay'>";
      var closeOverlay = "</div>";
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
          openDesc + i + openDescClose + captionList[i] + closeDesc +
          closeCaption +
          openOverlay +
          openText +
          overlayList[i] +
          closeText +
          closeOverlay +
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
      
      