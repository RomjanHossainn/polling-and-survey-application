import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
const axiosSecure = axios.create({
  baseURL: "https://y-omega-rouge.vercel.app",
});

const useAxiosSecure = () => {

    const navigate = useNavigate()
    const {logOut} = useAuth();

    axiosSecure.interceptors.request.use(function (config) {
      console.log('requese')
      const token = localStorage.getItem('token')
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },function(err){
      return Promise.reject(err)
    });


    axiosSecure.interceptors.response.use(function(response) {
      return response;
    },function(err) {
      const status = err.response.status;
      if(status === 401 || status === 403){
        console.log('response')
        navigate('/login');
        logOut()
        .then(() => {

        })
      }
    })

    return axiosSecure;
};

export default useAxiosSecure;