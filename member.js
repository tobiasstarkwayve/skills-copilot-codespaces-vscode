function skillsMember() {
  // console.log("skillsMember() called");
  let skills = document.getElementsByClassName("skills");
  for (let i = 0; i < skills.length; i++) {
    skills[i].addEventListener("click", function() {
      // console.log("skills[] clicked");
      let memberName = this.parentNode.querySelector(".member-name").textContent;
      let memberSkills = this.parentNode.querySelector(".member-skills").textContent;
      let memberImage = this.parentNode.querySelector(".member-image").getAttribute("src");
      document.getElementById("modal-member-name").textContent = memberName;
      document.getElementById("modal-member-skills").textContent = memberSkills;
      document.getElementById("modal-member-image").setAttribute("src", memberImage);
      document.getElementById("modal-member").style.display = "block";
    });
  }
}