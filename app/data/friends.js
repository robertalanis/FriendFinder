// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" user.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
  {
    "name": "Robert",
    "photo": "https://avatars2.githubusercontent.com/u/59277298?s=460&u=ec6f77a4ea5f5278c635ac1e512211e886b0e97d&v=4",
    "scores": [
    "5",
    "1",
    "4",
    "4",
    "5",
    "1",
    "2",
    "5",
    "4",
    "1"
    ]
    },
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendArray;
  