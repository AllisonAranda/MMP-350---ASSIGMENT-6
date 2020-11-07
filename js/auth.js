

const loginEmail = document.getElementById("login-email");
const loginPassword = js.getEl("login-password");
const loginButton = js.getEl("login-button");
const loginMessage = js.getEl("login-message");
const userName = js.getEl("user-name");
const logoutButton = js.getEl("logout-button");




loginButton.onclick = function(){
    fb.login(loginEmail.value, loginPassword.value);
};

logoutButton.onclick = function(){
    fb.logout();
    console.log("logging out");
};

function onError(errorMessage){
    logingMessage.textContent = errorMessage;
}
function userLoggedIn(uid, displayName){
    userName.textContent = "welcome" + displayName + ".";
    // add the link to the user profile
	// profileLink.href = "profile.html?uid=" + uid;

	// add the auth body
	document.body.classList.add('auth');
}

function noUser(){
    // remove the auth body
    document.body.classList.remove('auth');
}