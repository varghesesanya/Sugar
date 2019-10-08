import axios from 'axios';

const COURSE_API_URL = 'http://localhost:8o8o'

class ProductDataService{
    getTopProducts(){
        return axios.get('${COURSE_API_URL}/dealsoftheday');
    }
}

export default new ProductDataService();