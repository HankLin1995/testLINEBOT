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

    