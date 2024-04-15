const url = 'https://reqres.in/api/users'


// fetch(url)
// .then(response => response.json())
// .then(result => console.log(result.data[3]))

async function getData() {
    try {
        let response = await fetch(url);
        let data = await response.json();
        let array = await data.data;
        let obj = array[3];
     //   console.log(obj)
       
        const body = document.getElementsByTagName('body')[0]; 
        const heading =  document.createElement("h2")
        const userObj = document.createElement("p")
        const userImg = document.createElement("img")
        const userAvatar = document.createElement("h2")

        heading.innerHTML=`User Info`
        userObj.innerHTML = `Data : ${JSON.stringify(obj)}`
        userAvatar.innerHTML = obj.first_name + " " + obj.last_name 
        body.append(heading)
        body.append(userObj)
        body.append(userAvatar)
        userImg.setAttribute("src",obj.avatar)
        body.append(userImg)

    }
    catch {
        console.error();
    }
}

getData()


async function sendData() {
    try {
        const response = await fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "same-origin",
            body: JSON.stringify({
                "name": "morpheus",
                "job": "leader"
            })

        }
        )
        let data = await response.json()
      
        console.log(data)

        return data;
    }

    catch {
        console.error();
    }
}

console.log(sendData())
