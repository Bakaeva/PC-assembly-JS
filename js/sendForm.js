const sendForm = () => {
    const form = document.querySelector('.modal');
    const text = form.querySelector('input[type="text"');
    const tel = form.querySelector('input[type="tel"');
    const email = form.querySelector('input[type="email"');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        let formData = new FormData(form);
        let resMsg = '';
        let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: new FormData(form)
        })
            .then(async (response) => {
                if (response.status !== 201) {
                    throw new Error('Failed to send data! Status error = ' + response.status);
                };
                let result = await response.json();
                resMsg = 'Data sent successfully.';
                return result;
            })
            .catch((error) => {
                resMsg = error.message;
            })
            .finally(() => {
                text.value = '';
                tel.value = '';
                email.value = '';
                alert(resMsg);
            });
    });
};

sendForm();