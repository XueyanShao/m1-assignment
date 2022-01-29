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
      var openList = "<li id='cats'>"; //variable to contain open list
      var closeList = "</li>"; //variable to contain close list
      var openCaption = "<span id='catcaptions'>";
      var closeCaption = "</span>";
      var openOverlay = "<div id='overlay'>";
      var closeOverlay = "</div>";
      var openText = "<div id='text'>";
      var closeText = "</div>";

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
          openOverlay +
          openText +
          overlayList[i] +
          closeText +
          closeOverlay +
          closeList; //assemble the entire image lists and store in variable
        imageList.push(image); //store the image
      }
      //Display all six images from the array in the album
      document.getElementById("catimages").innerHTML = imageList.join(" ");