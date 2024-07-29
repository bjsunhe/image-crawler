const imageUrl = "blob:https://artsandculture.google.com/0731dada-a1eb-4f54-b5ad-13f5dfaee553";
      
      try {
        // Fetch the image as a blob
        const response = await fetch(imageUrl);
        const blob = await response.blob();

        // Create a URL for the blob
        const url = URL.createObjectURL(blob);

        // Create a link element
        const a = document.createElement('a');
        a.href = url;
        a.download = 'image.png';  // Set the file name
        document.body.appendChild(a);
        a.click();  // Trigger the download
        document.body.removeChild(a);

        // Revoke the URL after the download
        URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Error fetching the image:', error);
      }
