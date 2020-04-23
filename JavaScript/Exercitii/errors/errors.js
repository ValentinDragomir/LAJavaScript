try {
    // console.logg('This should not happen!');
    console.log('Do we see this message?');
    throw new TypeError('I trow this error');
} catch (error) {
    console.log('Type: ' + error.name);
    console.log('Error message: ' + error.message);
    console.log('There was an error: ' + error);
}

console.log('Do we see this message?');