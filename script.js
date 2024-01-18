
// 在表單提交時觸發的函式
function submitForm(event) {
event.preventDefault();  // 防止表單正常提交

// 獲取表單中的值
var name = document.getElementById('name').value;
var dob = document.getElementById('dob').value;
var startTime = document.getElementById('timepicker').value;
var endTime = document.getElementById('timepicker2').value;
var location = document.getElementById('loc').value;
var materialContent = document.getElementById('email').value;

// 構建要發送的 JSON 資料
var formData = {
  name: name,
  dob: dob,
  startTime: startTime,
  endTime: endTime,
  location: location,
  materialContent: materialContent
};

// 使用 Fetch API 發送 POST 請求
fetch('https://script.google.com/macros/s/AKfycbykLii30LRrAykyHttNp7SK39SEi7TOOXvTp-b_LxnW3wQpVoz0IzlGwSFfZbIYdN8p/exec', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => {
  console.log('API 回應:', data);
  // 在這裡可以處理 API 回應，例如顯示成功訊息等
})
.catch(error => {
  console.error('發生錯誤:', error);
});
}


$(document).ready(function () {
      $('#timepicker').pickatime({
        formatSubmit: 'HH:i',  // 24-hour format
        hiddenName: true
      });
    });

    $(document).ready(function () {
      $('#timepicker2').pickatime({
        formatSubmit: 'HH:i',  // 24-hour format
        hiddenName: true
      });
    });

liff.init(
  { liffId:"2002566613-1Gqzq5ee" },
  () => {
    initLIFF();
  },
  err => {
    window.alert(err);
  }
);

function initLIFF() {
  if (liff.isLoggedIn()) {
    liff
      .getProfile()
      .then(profile => {
        document.getElementById("userIdDisplay").innerHTML = "User ID: " + profile.userId;
      })
      .catch(e => {
        // Handle any error during getProfile, and then initiate login
        console.error("Error getting profile:", e);
        liff.login({ redirectUri: window.location.href });  // Add redirectUri parameter
      });
  } else {
    document.getElementById("userIdDisplay").innerHTML = "No data, Login first";
  }
}

    
