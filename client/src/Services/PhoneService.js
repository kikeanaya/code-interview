import axios from 'axios'

class PhoneService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:5000/',
      withCredentials: true
    })
    this.service = service
  }

  getAllPhones = () => {
    return this.service.get('phones')
    .then(res => res)
    .catch(err => console.log(err))
  }
}

export default PhoneService