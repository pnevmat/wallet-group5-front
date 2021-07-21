import axios from "axios"

 async function fetch () {
    
      
        const response = await axios.get(`https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11`)
        // .then(res => {
        //   console.log(res.data);
        //   const persons = res.data;
        //   this.setState({ persons });
    
        //   this.setState({ isLoading: false });
        // });
        return response
      
        
      
    }

    export default fetch;