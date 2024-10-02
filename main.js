var number;

$('.image').hide();
$('.previous').hide();
$('.next').hide();

$('.start').on('click', doSearch);
$('.previous').on('click', goPrevious);
$('.next').on('click', goNext);

document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft') {
    goPrevious();
  }else if (e.key === 'ArrowRight') {
    goNext();
  }
});

function doSearch()
{
  $('.image').show();
  $('.previous').show();
  $('.next').show();

  var date = document.getElementById("date");

  switch(date.value)
  {
    case "1":
      document.getElementById('title').innerHTML = "2024.09.25 臺灣高雄小港 → 日本東京成田機場 → 新潟";
      break;
    case "2":
      document.getElementById('title').innerHTML = "2024.09.26 新潟大學ICNS研討會";
      break;
    case "3":
      document.getElementById('title').innerHTML = "2024.09.27 新潟 → 盛岡";
      break;
    case "4":
      document.getElementById('title').innerHTML = "2024.09.28 盛岡 → 東京";
      break;
    case "5":
      document.getElementById('title').innerHTML = "2024.09.29 橫濱";
      break;
    case "6":
      document.getElementById('title').innerHTML = "2024.09.30 東京";
      break;
    case "7":
      document.getElementById('title').innerHTML = "2024.10.01 日本東京成田機場 → 臺灣高雄小港";
      break;
    default:
      return;
  }

  number = 1

  initialization();
  showPicture();
}

function showPicture()
{
  var date = document.getElementById("date");
  var image = document.getElementById("image");

  switch(date.value)
  {
    case "1":
      image.src = "./picture/20240925 (" + number + ").jpg";
      break;
    case "2":
      image.src = "./picture/20240926 (" + number + ").jpg";
      break;
    case "3":
      image.src = "./picture/20240927 (" + number + ").jpg";
      break;
    case "4":
      image.src = "./picture/20240928 (" + number + ").jpg";
      break;
    case "5":
      image.src = "./picture/20240929 (" + number + ").jpg";
      break;
    case "6":
      image.src = "./picture/20240930 (" + number + ").jpg";
      break;
    case "7":
      image.src = "./picture/20241001 (" + number + ").jpg";
      break;
    default:
      return;
  }

  document.getElementById('descript').innerHTML = Description[date.value][number];

  console.log(date.value + " " + number);
}

function goPrevious()
{
  if(number > 1)
  {
    number--;
  }

  showPicture();
}

function goNext()
{
  var date = document.getElementById("date");

  switch(date.value)
  {
    case "1":
      if(number < 48)
      {
        number++;
      }
      break;
    case "2":
      if(number < 4)
      {
        number++;
      }
      break;
    case "3":
      if(number < 34)
      {
        number++;
      }
      break;
    case "4":
      if(number < 31)
      {
        number++;
      }
      break;
    case "5":
      if(number < 176)
      {
        number++;
      }
      break;
    case "6":
      if(number < 215)
      {
        number++;
      }
      break;
    case "7":
      if(number < 43)
      {
        number++;
      }
      break;
    default:
      return;
  }

  showPicture();
}
