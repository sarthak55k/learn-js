window.onload = function() {
    const list = document.getElementById('Top5');
    const inp = document.getElementById('inp');
    const btn = document.getElementById('btn');
    list.innerHTML = '';

    const myHistory = [];
    const MAX_HISTORY = 5;

    btn.onclick = () => {
        if (inp.value !== '') {
            // Add the new value to the history array
            myHistory.push(inp.value);

            // If the array length is 5 or more, remove the oldest search term
            while (myHistory.length > MAX_HISTORY) {
                myHistory.shift(); // Remove the first item from the history array
            }

            // Sort the array by the length of each item after potentially removing one
            const myHistoryCopy = [...myHistory].sort((a, b) => a.length - b.length);

            // Empty the list to prevent duplicate entries
            list.innerHTML = '';

            // Loop through the sorted array, and display all the search terms in the list
            for (const itemText of myHistoryCopy) {
                const li = document.createElement('li');
                li.textContent = itemText;
                list.appendChild(li);
            }

            // Empty the search input and focus it, ready for the next term to be entered
            inp.value = '';
            inp.focus();
        }
    }
}
