 // Get references to the status paragraph and enter button
    const statusParagraph = document.getElementById('status');
    const enterButton = document.getElementById('enterBtn');

    // Add click event listener to the enter button
    enterButton.addEventListener('click', function() {
      // Change the text content of the status paragraph
      statusParagraph.innerHTML = '<h1>Entered Metaverse</h1>';
    });
