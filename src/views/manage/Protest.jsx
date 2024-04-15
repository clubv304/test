const Protest =() =>{
    const [money, setMoney] = useState('');

    const handleInputChange = (event) => {
      setMoney(event.target.value);
    };
  
    const handleSubmit = () => {
      // Do something with the input value, like sending it to a server or updating state
      console.log('Input value:', money);
    };
    return(
        <>
         <input
         class="float-right" style="width: 50%; background-color: rgb(231, 244, 177);"
        id="money"
        type="text"
        value={money}
        onChange={handleInputChange}
        placeholder="Enter your name"
      />
      <button onClick={handleSubmit}>Submit</button>
        </>
    )
}