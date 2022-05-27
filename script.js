let input = document.getElementById('input');
let btn = document.getElementById('btn');
let ul = document.querySelector('ul');

btn.addEventListener('click', function (event) {
    event.preventDefault();
    
    let fetchRequest = fetch(`https://api.github.com/users/${input.value}`);
    fetchRequest
    .then((responses) => {
        console.log(responses);
        return responses.json()
        
    })
    .then(result => {
        const userName = result.name;
        const userId = result.id;
        const userLogin = result.login;
        userInfo = [userName, userId, userLogin];
        console.log(userInfo);
        let li = document.createElement('li');
        ul.append(li);
        li.innerHTML = userInfo;
    })
})

