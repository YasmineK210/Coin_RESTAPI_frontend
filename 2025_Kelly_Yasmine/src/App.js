function App() {
  function sendCalculation(){
    const apiUrl = "http://34.143.176.134/api/coin"

    var inputNumber = parseFloat(document.getElementById("textarea").value)

    console.log("Input Value:", inputNumber);

    const urlWithParams = `${apiUrl}?input=${inputNumber}`;
    
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    };

    fetch(urlWithParams, requestOptions)
      .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
      })
      .then(data => {
        var output = document.getElementById("outputarea")
        output.textContent = JSON.stringify(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  return (
    <div className="flex-container">
      <h3>Calculate Coin Website</h3>
      <div className="input-container">
        <form id="form1">
          <p>Input value:</p>
          <textarea id="textarea"></textarea>
          <input type="button" value="send" onClick={sendCalculation} />
        </form>
      </div>
      <div>
      <p>Result:</p>
      <textarea id="outputarea"></textarea>
      </div>
    </div>
  );
}

export default App;
