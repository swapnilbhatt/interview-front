getInput = ()=> {
    const input = {
        name: "Elon Musk"
    }

    return input;
}

//document.onload(()=>{
   const profileCard =  document.getElementsByTagName("profile-card")[0];
    profileCard.setAttribute("profile", getInput());
   console.log(profileCard); //.attributes.add('profile', getInput());
//})

