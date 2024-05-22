document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('submitButton').value = 'Subscribed';
});

document.getElementById('discountSubscribeForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    document.getElementById('subscribeButton').textContent = 'Subscribed';
});