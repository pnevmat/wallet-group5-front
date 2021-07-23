import axios from "axios"

async function fetch () {
    const response = await axios.get(`https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11`)
    return response
}

export default fetch;