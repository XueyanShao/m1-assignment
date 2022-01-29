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
  var popupList = []; //empty array to store html list that contains popup window
      /*<div id="bio-name">

<h3>Header/Name</h3>

<p style="font-family:Lato; font-weight:500; font-style:normal; font-size:12px; letter-spacing:.4px; line-height:2.18em; color:#999999;" !important>

Text goes in here.

</p>
  </div>*/
      var openList = "<li id='dogs'>"; //variable to contain open list
      var closeList = "</li>"; //variable to contain close list
      var openCaption = "<span id='dogcaptions'>";
      var closeCaption = "</span>";
      var openOverlay = "<div id='overlay'>";
      var closeOverlay = "</div>";
      var openText = "<div id='text'>";
      var closeText = "</div>";
    
  //Display popup window when click on images
        var openPopup = "<div id='myPopup'>"
      var closePopup = "</div>";
      var popup = ""; //assemble the popup list codes
          var infoList = [
          "Text Here",
        "Text Here",
        "Text Here",
        "Text Here",
        "Text Here",
        "Text Here", 
      ];
      
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
          openOverlay +
          openText +
          overlayList[i] +
          closeText +
          closeOverlay +
          closeList; //assemble the entire image lists and store in variable
        imageList.push(image); //store the image
        //popupwindow set up
        popup = openPopup + captionList[i] + infoList[i] + closePopup;
        popupList.push(popup); //store popup codes
     
      }
        var clickImage = document.getElementById("dogimages");
        clickImage.addEventListener("click",enablePopup);
      //Display all six images from the array in the album
      document.getElementById("dogimages").innerHTML = imageList.join(" ");
      //Display popup Window
      document.getElementById("popupWindow").innerHTML = popupList.join(" ");

    
      function enablePopup() {
        document.getElementById("popupWindow").style = "display:block";
      };
      