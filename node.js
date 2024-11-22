app.post('/api/save-response', (req, res) => {
    const { username, company, service } = req.body;
  
    // Here, save to your database or process the data as needed
    console.log("Received Google Form data:", { username, company, service });
  
    res.sendStatus(200);  // Send a response back to confirm successful receipt
  });
  